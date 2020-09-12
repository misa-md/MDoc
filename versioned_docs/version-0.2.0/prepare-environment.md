---
id: prepare-environment
title: "准备环境"
sidebar_label: "准备环境"
original_id: prepare-environment
---

在 Linux 上构建 Crystal MD 之前，请在你的系统中安装以下构建工具：
- [CMake](http://cmake.org), 3.6及以上版本;
- 支持C++11特性的C++编译器;
- MPI环境;

## CMake
如果你的系统中未安装CMake构建工具，请按照[相关文档](https://cmake.org/)进行下载安装。

## c++编译器
为了编译Crystal MD程序，要求你的系统上要已经安装了相关的C++编译器。
各类编译器对c++11特性的支持情况可参考[相关文档](http://zh.cppreference.com/w/cpp/compiler_support#cpp11})。

我们测试过以下编译器可以正常工作：
- GUN g++ 4.8及以后版本
- LLVM Clang++ 3.3及以上版本
- Intel icc 2017

## MPI环境
要求你的系统中安装了支持MPI 2.0及以后标准的MPI环境。
