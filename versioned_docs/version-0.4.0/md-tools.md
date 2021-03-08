---
id: md-tools
title: "md-tools 工具"
sidebar_label: "md-tools 工具"
---

CrystalMD 模拟结束后，会产生二进制的原子信息文件，我们需要使用 md-tools 工具(v0.1.0)将其转化为可读的文本文件。

> md-tools工具目前支持 OS X, linux系统；linux版本中包含amd64， arm等主流架构版本，OS x包含主流的amd64版本。

!> __TODO__ 编译

## 1. 基本命令
### 1.1 md-tools --help命令
查看帮助信息。
```bash
$ md-tools --help
md-tools 0.1.0
Crystal MD conversion tools, compatible with Crystal MD v0.3.x.

USAGE:
    md-tools [OPTIONS] --format <FORMAT> --input <input> --ranks <RANKS>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -f, --format <FORMAT>    output format(xyz, text, db, def)
    -i, --input <input>      Sets the filename of input file
    -o, --output <output>    Sets the filename of output file [default: md-output]
    -r, --ranks <RANKS>      ranks to run the parallel program
```

更多md-tools相关内容，请参考 https://git.hpcer.dev/HPCer/CrystalMD/md-tools 或 https://github.com/misa-md/md-tools 。

### 1.2 转换模拟结果文件到文本文件
命令示例：
```bash
md-tools -f text -r 16 -i ./crystal_md.origin.out -o origin.txt
```
上面的例子中，-i 选项（或--input选项）指定MD模拟结果的二进制文件路径； -o （或--output） 选项指定转换的可读文本文件路径； -r选项（或--ranks）指定模拟时使用的MPI进程数(这里是16个MPI进程)；--format选项指定转换后的文件格式，目前支持xyz(用于可视化的xyz格式)和text (包含粒子速度、位置、类型等信息的文本文件) 两种格式。

如果要转换为可视化的xyz格式，只需设置--format选项为xyz即可:
```bash
md-tools -f xyz -r 16 -i ./crystal_md.origin.out -o origin.xyz
```