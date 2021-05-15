---
id: compiling-with-hip
title: "编译构建: 添加异构 GPU/DCU 支持"
sidebar_label: "编译构建: 添加 GPU/DCU 支持"
---

MISA-MD 对英伟达 GPU、AMD GPU 及 DCU 等硬件的支持是通过 HIP 实现的。  
[HIP](https://github.com/ROCm-Developer-Tools/HIP) 是 AMD 推动的用于在 NVIDIA GPUs、AMD GPU 和 DCU 等硬件上进行加速计算的编程模型，其 API 也十分接近 NVIDIA CUDA，并支持将 CUDA 代码转化为 HIP 代码。
目前，HIP 支持 NVIDIA CUDA 和 [AMD ROCm](https://rocmdocs.amd.com/en/latest/index.html) 平台。
MISA-MD 则是通过 HIP 来实现对多种加速硬件的计算支持。
具体有关 HIP 的安装和环境配置请参见[相关文档](https://github.com/ROCm-Developer-Tools/HIP/blob/main/INSTALL.md)。

## 准备额外的源码
为了支持在 GPU 上运行 MISA-MD，在开始构建之前，除了 CPU 版本所需的依赖包外，还需要获取几个额外的源码包： 
- hip-potential: https://github.com/misa-md/hip-potential ，支持 HIP 的 EAM 势函数计算库；
- misa-md-hip: https://git.hpcer.dev/HPCer/MISA-MD/misa-md-hip ，MISA-MD 核心计算模块的 HIP 实现。

### 添加 hip-potential 包
hip-potential 采用 HIP 编写的，用于在 GPU 卡上进行势函数计算的库和接口。
为了添加 hip-potential 包，可通过编辑 MISA-MD 的 `pkg.yaml` 文件，在其中加入以下内容:
```diff
dependencies:
  packages:
+   git.hpcer.dev/HPCer/MISA-MD/hip-potential@v0.1.0@hip_pot:
+     features: ["HIP_POT_TEST_BUILD_ENABLE_FLAG=OFF"]
    github.com/Taywee/args@6.2.2@args: {build: ["CP args.hxx {{.INCLUDE}}/args.hpp"]}
```
随后，执行 `pkg fetch` 命令获取该包的源码。
:::note
当然，如果你是通过 .tar 文件，导入依赖包的且 .tar 文件中已经已经包含了hip-potential 包，也可以直接执行类似于 `pkg import --input /your/path/vendor-xxxx.tar` 命令来导入依赖包。
:::

### misa-md-hip 包
对于 misa-md-hip 包，可直接下载源码，我们假设 MSIA-MD 和 misa-md-hip 放置的路径如下:
```bash
|-- MISA-MD  # 通用 MISA-MD 源码
|-- misa-md-hip  # MISA-MD 核心计算的 HIP 实现 (即 misa-md-hip 包)
```

## 构建前的准备
除了构建 CPU 版本所需的环境和工具外，构建支持 GPU/DCU 的 MISA-MD 还需要以下环境：
1. HIP 请确保系统上安装了 HIP，且版本需要 3.5 及以上版本；并配置好了 `HIP_PATH` 环境变量（如：`export HIP_PATH=/opt/compilers/rocm/4.2.0`）。
2. 如果您的硬件平台是英伟达的 GPU，请确保安装且正确配置了 CUDA 并配置了 `CUDA_PATH` 环境变量（如：`export CUDA_PATH=/opt/tools/cuda/10.0`）；  
   如果硬件平台是 AMD GPU，请确保安装了 [ROCm、ROCr](https://rocmdocs.amd.com) 环境。
3. 配置`HIP_PLATFORM`环境变量: NVIDIA GPU 需要设置为 ` HIP_PLATFORM=nvidia`, AMD GPU 需设置为 `HIP_PLATFORM=amd`。
   更多请参考[相关文档](https://rocmdocs.amd.com/en/latest/Current_Release_Notes/Current-Release-Notes.html?highlight=HIP_PLATFORM#changed-environment-variables-for-hip)

## 构建依赖包
该步骤和 [CPU 版本中构建依赖包](./get-source-code.md#2-安装依赖)的方式一样，直接使用 `pkg install` 命令即可完成包括 `hip-potential` 在内的依赖包的构建和安装。  
:::tip
如果 hip 环境不是安装在默认的 /opt/rocm 目录下，可以通过 `HIP_PATH` 环境变量来指定 hip 的安装路径。  
如果目标平台是 CUDA，可以通过 `CUDA_PATH` 环境变量来指定自定义的 CUDA 安装路径，如 `CUDA_PATH=/opt/tools/cuda/10.0`。
:::

## 构建支持 GPU/DCU 硬件的 MISA-MD
进入 `MISA-MD` 目录，然后执行以下命令以构建支持 GPU/DCU 硬件的 MISA-MD。
```bash
# in MISA-MD directory
cmake -B./cmake-build-hip -S./  \
    -DMD_HIP_ARCH_ENABLE_FLAG=ON \
    -DMD_HIP_ARCH_SRC_PATH=../misa-md-hip \
    -DHIP_HIPCC_FLAGS=-std=c++11 \
    -DHIP_NVCC_FLAGS=-rdc=true \
    -DHIP_NVCC_FLAGS="-arch=sm_35 -rdc=true" \
    -DCMAKE_CXX_FLAGS="-fPIC -std=c++11 -stdlib=libstdc++ -lcudart"
cmake --build ./cmake-build-hip/ -j 4
```
其中在 cmake 配置过程中，`MD_HIP_ARCH_ENABLE_FLAG` 参数表示启用 HIP 环境的支持， `MD_HIP_ARCH_SRC_PATH` 参数指定了 `misa-md-hip` 包的源码目录。 
此外，我们还指定了链接器为 hipcc 和链接命令。

:::tip
如果你需要生成优化版本的可执行文件，可以在 cmake 配置命令中加上 `-DCMAKE_BUILD_TYPE=Release` 选项，
这样 cmake 在调用编译器进行编译和链接时就会使用优化选项（如 `-O3` 选项）。
:::
编译完成后，即可在 MISA-MD 的 `cmake-build-hip/bin` 目录找到支持在 GPU 或 DCU 硬件上运行的 msiamd 可执行文件。

关于运行支持 GPU 或 DCU 硬件的 MISA-MD 程序的相关配置，请参见 xxx

## 常见问题
1. 编译 hip-potential 依赖包时出现: redefinition of ‘hip_pot::_type_device_pot_element..." 
```log
Error：redefinition of ‘hip_pot::_type_device_pot_element (** pot_tables)[7]’
 __device__ hip_pot::_type_device_pot_spline **pot_tables = nullptr;
```
参考 https://stackoverflow.com/a/38251035
修改 pkg.yaml， 如下添加编译选项 `HIP_NVCC_FLAGS`
```yml
git.hpcer.dev/HPCer/MISA-MD/hip-potential@v0.1.0@hip_pot:
      features: ["HIP_POT_TEST_BUILD_ENABLE_FLAG=OFF", "HIP_NVCC_FLAGS=-rdc=true"]
```

2. 编译 hip-potential 依赖包时出现 `nullptr` 不识别，或者 "warning: field initializers are a C++11 feature"
可能默认 CUDA 不支持 C++11，需要开启 C++11 的支持。  
更多请参考：https://stackoverflow.com/q/9057123
可以在 pkg.yaml 中 添加对应的 feature 解决 `"HIP_HIPCC_FLAGS=-std=c++11"`
```yml
git.hpcer.dev/HPCer/MISA-MD/hip-potential@v0.1.0@hip_pot:
      features: ["HIP_POT_TEST_BUILD_ENABLE_FLAG=OFF", "HIP_HIPCC_FLAGS=-std=c++11"]
```

3. 链接时出现错误： "error adding symbols: DSO missing from command line"
```log
/usr/bin/ld: ../src/arch_hip/lib/libmd_arch_hip.a(md_arch_hip_generated_hip_arch_acc_imp.cpp.o): undefined reference to symbol '_ZNSt8ios_base4InitD1Ev@@GLIBCXX_3.4'
//usr/lib64/libstdc++.so.6: error adding symbols: DSO missing from command line
clang-12: error: linker command failed with exit code 1 (use -v to see invocation)
```
检查是否所有的依赖库（包括 MPI）都是使用 libc++ 或者 都是 libstdc++ 编译的，需要统一用一种 c++ 标准库。
CMake 在编译时指定标准库实现如下：`-DCMAKE_CXX_FLAGS="-fPIC -std=c++11 -stdlib=libstdc++ -lcudart"`

4. HIP 在 CUDA 环境下编译出错： Error：‘comm::Domain::Builder’ is not a template type
```log
comm/domain/domain.h:44:40: Error：‘comm::Domain::Builder’ is not a template type
         template<typename, typename>
```
修改 libcomm 库位于 vendor/pkg 目录下的头文件 "comm/domain/domain.h"：
```diff
-        class Builder;

        template<typename, typename>
        friend
        class comm::Builder;

+        class Builder;
```

5. 编译链接阶段出现 “undefined reference to `__cudaRegisterLinkedBinary...”
```log
../src/arch_hip/lib/libmd_arch_hip.a(md_arch_hip_generated_hip_arch_acc_imp.cpp.o): In function `__sti____cudaRegisterAll()':
tmpxft_00003686_00000000-5_hip_arch_acc_imp.cudafe1.cpp:(.text+0x3632): undefined reference to `__cudaRegisterLinkedBinary_51_tmpxft_00003686_00000000_6_hip_arch_acc_imp_cpp1_ii_n'
```
参见 https://stackoverflow.com/a/16310324
需要用 nvcc 或者 hipcc 作为链接器，具体可在 CMake 配置阶段添加如下选项：
```bash
-DCMAKE_LINKER=hipcc -DCMAKE_CXX_LINK_EXECUTABLE="<CMAKE_LINKER> <FLAGS> <CMAKE_CXX_LINK_FLAGS> <LINK_FLAGS> <OBJECTS> -o <TARGET> <LINK_LIBRARIES>"
```
