# CrystalMD on Era
## 1.准备工作
### 1.1 获取源代码
```bash
local:$ git clone git@git.gensh.me:HPCer/CrystalMD/CrystalMD.git
local:$ cd $MD_PATH  # CrystalMD 源代码路径，需要替换成实际路径，下同
local:$ git checkout dev # checkout to your desired branch.
local:$ pkg install # 安装依赖
```

### 1.2 准备势函数文件
```bash
local:$ cd $MD_PATH 
local:$ wget https://www.ctcms.nist.gov/potentials/Download/Fe-Cu-Ni-GB/FeCuNi.eam.alloy -O example/FeCuNi.eam.alloy
```

### 1.3 上传文件
```bash
local:$ cd ../
local:$ tar CrystalMD-v3.0.0.tar.gz $MD_PATH # 打包源代码文件
local:$ scp CrystalMD-v3.0.0.tar.gz  username@explane.sccas.cn:~/Era_md_path # scp 上传至 '元', username和Era_md_path 请替换成自己的路径
local:$ 
```
注: 前三步，可以替换成，将自己本地编译通过的代码及势函数文件上传到'元'上。


## 2. 登录'元'及准备工作
### 2.1 解压
```bash
local:$ ssh username@explane.sccas.cn # 登录
era:$ cd Era_md_path
era:$ ls
CrystalMD-v3.0.0.tar.gz #之前上传的源码及其依赖文件
era:$ tar zxcf CrystalMD-v3.0.0.tar.gz # 解压
era:$ ls
CrystalMD CrystalMD-v3.0.0.tar.gz
```

### 2.2 修改相关CMakeLists.txt文件
由于元上的CMake工具最高版本为3.0.2，而我们CrystalMD中制定了CMake工具最低版本为3.6, 需要修改最低版本限制
```bash
era:$ cd $ERA_MD_PATH # '元上的'MD源码目录(~/Era_md_path/CrystalMD)，依据自己情况进行替换
```

- ```vi CMakeLists.txt```  
修改前后如下:

```diff
diff --git a/CMakeLists.txt b/CMakeLists.txt
index 42ed5b4..995ae54 100644
--- a/CMakeLists.txt
+++ b/CMakeLists.txt
@@ -1,7 +1,8 @@
-cmake_minimum_required(VERSION 3.6)
+cmake_minimum_required(VERSION 3.0)
 project(CrystalMD)
 
 set(CMAKE_CXX_STANDARD 11)
+set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
 
 include(config.cmake)
 include(dependency.cmake)
```

- ```vi vendor/src/kiwi/CMakeLists.txt```  
修改前后如下，分别修改最小版本限制和不编译依赖代码的测试:

```diff
diff --git a/CMakeLists.txt b/CMakeLists.txt
index 2376b6d..72aa4c5 100644
--- a/CMakeLists.txt
+++ b/CMakeLists.txt
@@ -1,4 +1,4 @@
-cmake_minimum_required(VERSION 3.8)
+cmake_minimum_required(VERSION 3.0)
 project(kiwi)
 
 set(CMAKE_CXX_STANDARD 11)
@@ -35,5 +35,5 @@
 
 ### build test
 if (KIWI_BUILD_TESTS)
-    add_subdirectory(test)
+#    add_subdirectory(test)
 endif ()
```

## 3. 使用 ```pgi/mpich/3.1.3``` 在'元'上编译
### 3.1 准备环境
加载环境：
```bash
era:$ module load tools/cmake/3.0.2 compiler/gnu/4.9.2 compiler/pgi/15.1 
era:$ module load compiler/pgi/mpich/3.1.3/15.1
era:$ export CC=/soft/compiler/gnu/4.9.2/bin/gcc  # c++11 support
era:$ export CXX=/soft/compiler/gnu/4.9.2/bin/g++
```

### 3.2 编译构建
```bash
era:$ cd $ERA_MD_PATH
era:$ mkdir build
era:$ cd build
era:$ cmake ../
era:$ make -j4
```

### 3.3 作业提交

针对前文中的环境，先写入环境加载脚本```run.sh```, 然后提交run.sh运行。

写入```run.sh``` shell脚本文件，并提交运行：
```bash
era:$ cd $ERA_MD_PATH/example
era:$ vi run.sh
era:$ chmod +x run.sh
era:$ export OMP_NUM_THREADS=1 # disable OpenMP
era:$ bsub -W 60 -n 32 -q cpuII -o %J.out -e %J.err mpijob.intelmpi ./run.sh 32 config.toml # 两处出现的32均为MPI进程数/运行核数
Job <7375066> is submitted to queue <cpuII>.
era:$ bjobs
JOBID   USER    STAT  QUEUE      FROM_HOST   EXEC_HOST   JOB_NAME   SUBMIT_TIME
73***66 *****   RUN   cpuII      login8      24*m4402    *nfig.toml Jul  9 15:16
                                             8*c5529
```

其中 ```run.sh``` 文件内容如下
```bash
#/bin/bash
processors=$1
conf_file=$2
# load modules
module unload mpi
module load compiler/gnu/4.9.2  compiler/pgi/15.1  compiler/pgi/mpich/3.1.3/15.1
# export CC=/soft/compiler/gnu/4.9.2/bin/gcc
# export CXX=/soft/compiler/gnu/4.9.2/bin/g++

../build/bin/CrystalMD -c ${conf_file}
#mpirun -n ${processors} ../build/bin/CrystalMD -c ${conf_file}
```

注：对24, 48, 72个进行测试, 程序正常结束。
<!-- 这种方式可能存在多个节点上运行会卡住的情况 -->

## 4. 使用 ```mvapich2/1.9/gnu``` 在'元'上编译 (推荐)
这里使用另一套不同的MPI环境进行编译，但同样需要```compiler/gnu/4.9.2``` 环境以编译c++11特性的代码。  
使用```mpi/mvapich2/1.9/gnu``` MPI环境的好处是，'元'上已经有了该mpi的版本加载脚本，我们可以直接使用，但是我们需要添加 ```compiler/gnu/4.9.2``` 环境，能够让提交的程序找到相应的动态链接库（如libgcc, libstdc++）。

### 4.1 准备环境
如下：
```bash
# ear:$ module purge # clear other modules if necessary.
era:$ module load compiler/gnu/4.9.2 mpi/mvapich2/1.9/gnu tools/cmake/3.0.2
era:$ export CC=/soft/compiler/gnu/4.9.2/bin/gcc  # c++11 support
era:$ export CXX=/soft/compiler/gnu/4.9.2/bin/g++
```
### 4.2 编译构建
```bash
era:$ cd $ERA_MD_PATH
era:$ mkdir build
era:$ cd build
era:$ cmake ../
era:$ make -j4
```
### 4.3 作业提交
我们先修改mvapich2的MPI加载脚本 mpijob.mvapich2_gnu,添加compiler/gnu/4.9.2 环境。
```bash
era:$ cd $ERA_MD_PATH/example
era:$ cp $(which mpijob.mvapich2_gnu) ./mpijob.mvapich2_gnu_cpp11
era:$ vi mpijob.mvapich2_gnu_cpp11 # 1: 修改内容见下
era:$ export OMP_NUM_THREADS=1 # disable OpenMP
era:$ bsub -W 60 -n 40 -q cpuII -o %J.out -e %J.err ./mpijob.mvapich2_gnu_cpp11 ../build/bin/CrystalMD -c  config.toml
```

其中 mpijob.mvapich2_gnu_cpp11 文件修改内容如下：
```diff
#!/bin/sh

# set environments

module unload mpi
+# add high version libgcc,libstdc++ lib support.
+ module load compiler/gnu/4.9.2
module load mpi/mvapich2/1.9/gnu
...
```

注：对40, 48, 72个进行测试, 模拟正常结束。

## 5. 静态链接
由于编译节点（登录节点）和计算节点上的MPI环境，glibc动态链接库等可能会有所不同（例如环境变量未设置，动态链接库版本不同），如果使用完全静态链接的方式，程序的在计算节点上的运行将不会受到动态链接库版本不一致的影响。
一般是在链接时指定-static参数进行静态链接。

### 5.1 静态链接的可执行文件提交
可以直接将编译完成的二进制文件当初普通可执行程序进行提交。
如：
```bash
era:$ bsub -W 60 -n 32 -q cpuII -o %J.out -e %J.err ../build/bin/CrystalMD -c config.toml
```
