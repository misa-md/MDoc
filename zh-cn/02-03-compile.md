# 编译构建
Crystal MD使用CMake工具进行编译构建，如果你不熟悉CMake，可以参考CMake的相关文档。
在正式进行构建之前，确保你的系统已经安装并配置了CMake工具、相符版本的c++编译器、MPI环境等，
且确保已经正确配置了环境相关变量(如**CC** **CXX**环境变量)。

## 1.使用CMake工具编译
我们强烈推荐使用CMake外部构建(out-of-source build)方式进行构建：
```bash
cd $MD_PATH
mkdir build
cd build
cmake ../
make -j4  # build using 4 processors.
```
执行以上步骤后，编译完成的可执行Crystal MD程序会放在`$MD_PATH/build/bin`目录。

## 2.构建选项
如果你需要将编译完成的二进制文件安装到指定目录，可以用以下命令进行构建,并安装：
```bash
cd $MD_PATH
mkdir build
cd build
cmake ../ -DCMAKE_INSTALL_PREFIX=/your/desirable/path/
make -j4
make install # install
```

在执行cmake命令的时候，除了可以指定`CMAKE_INSTALL_PREFIX`等CMake构建工具内置的参数外，还可以指定以下参数：

|  参数 | 取值 | 默认值  |  说明 |
| :-   | :-:  | :-:	| :-   |
| TEST_ENABLE_FLAG       | ON/OFF	| ON | 是否构建test (单元测试) |
| TOOLS_BUILD_ENABLE_FLAG|  ON/OFF	| ON |  是否构建tools目录(包含一些数据后处理工具)	|

例如，如果你不希望构建单元测试和tools目录，可以使用如下的命令进行构建：
```bash
cd $MD_PATH
mkdir build
cd build
cmake ../ -DTEST_ENABLE_FLAG=OFF -DTOOLS_BUILD_ENABLE_FLAG=OFF
make -j4
```
