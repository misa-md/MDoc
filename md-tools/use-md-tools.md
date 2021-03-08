---
id: quick-start
title: "快速入门"
sidebar_label: "快速入门"
---

md-tools 是一个命令行工具，可对 MD 模拟结果的进行后处理与分析，其提供了 MISA-MD 模拟结果格式转换（二进制转可读文本格式），模拟结果缺陷分析等功能。  
目前，md-tools 提供了三个子命令：
- `md-tools conv`: 将 MISA-MD 模拟输出文件对二进制格式转换为文本格式。
- `md-tools ans`: 对 MD 模拟结果的 xyz 文件进行分析，分析算法目前仅包括 Wigner-Seitz 方法进行缺陷分析。
- `md-tools diff`: 提供了对 xyz 格式的文件比较的功能。

以上子命令的具体参数及其使用，可通过 `md-tools [sub-command] --help` 命令查看，如 `md-tools conv --help` 命令可查看 conv 子命令的各个参数。
:::caution
目前，md-tools 版本为 v0.2.0，该用户文档是针对 md-tools v0.2.0 及其以上版本撰写的。
在此之前的版本仅提供了 MISA-MD/CrystalMD 模拟结果格式转换功能。
:::

## 格式转换子命令: conv
conv 子命令将 misa-md 程序模拟输出结果的二进制格式转换为文本格式。

### 基本用法
命令示例：
```bash
md-tools conv -f text -r 16 -i ./misa_md.100.out -o 100.txt
```
上面的例子中，-i 选项（或 --input 选项）指定MD模拟结果的二进制文件路径； -o （或--output ） 选项指定转换的可读文本文件路径； -r选项（或 --ranks）指定模拟时使用的MPI进程数(这里是16个MPI进程)；
--format 选项指定转换后的文件格式，目前支持 xyz (用于可视化的 xyz 格式)和 text (包含粒子速度、位置、类型等信息的文本文件) 两种格式。

如果要转换为可视化的xyz格式，只需设置--format选项为xyz即可:
```bash
md-tools -f xyz -r 16 -i ./misa_mdl.100.out -o 100.xyz
```

### 多文件转换
conv 子命令还支持多个文件的转换以及通配符指定多个文件的转换，例如：
```bash
md-tools conv -r 512 -i ../output_files/*.out -f xyz -o md_xyz
```
```bash
md-tools conv -r 512 -i misa_mdl.100.out misa_mdl.200.out misa_mdl.200.out -f xyz -o md_xyz
```

:::note md-tools v0.1.0 兼容性
在 md-tools v0.1.0 中，我们仅提供了格式转换功能。使用格式转换功能可直接使用 md-tools，不用添加 conv 子命令。
:::

## 结果分析子命令: ans
ans 子命令采用缺陷分析算法对 xyz 文件中对粒子所构成的体系进行缺陷分析，分析结果写入到 `-o` 参数所指定的输出文件中；
输出文件中将包含缺陷位置坐标（包括空位、间隙对）。  
目前，md-tools 提供的算法仅支持 Wigner-Seitz 缺陷分析方法（简称 ws 方法），粒子体系仅支持 BCC 晶格结构的体系。

```bash
md-tools ans -i 1000*.xyz -o md.df
```
其中，
- -i （或 --input）和 -o （或 --output）参数分别指定输入和输出文件，输入文件可以指定多个，也可以使用通配符来指定多个文件。
- -b （或 --box-size）参数指定模拟 box 的大小（为正整数），如果不指定该参数，则 md-tools 会自动根据系统粒子坐标来决定模拟 box 的大小。
- -m （或 --algorithm）参数指定分析算法，默认为 ws 方法（目前也仅支持 ws 方法）。
- -S （或 --box-start）参数指定模拟 box 的起始坐标，如不指定，则 md-tools 会根据系统粒子坐标来决定模拟 box 的起始坐标。

## diff 子命令
`diff` 命令读入两个 xyz 文件中的粒子 ID、三维位置和速度信息，并逐一比较具有相同 ID 的两个粒子的位置和速度是否超过指定的误差界限
（通过 `-e` 参数指定误差界限）。

示例：
```bash
md-tools diff -p -b 228.4256 228.4256 228.4256 -e 0.01 ./atom1.xyz ./atom2.xyz
```
其中，
- `-p` 选项指定是否进行周期性边界检查。如果指定了该参数，也必须指定模拟 box 大小。
如果某粒子超过 box 边界，可通过周期性边界将该粒子映射到模拟 box 内，然后再进行粒子位置的比较。  
- `-b` 参数指定 x、y、z 三个维度的模拟 box 大小。
- `-e` 参数指定位置、速度比较时的误差界限。若两个粒子的位置坐标和速度在三个维度的差别均小于该误差界限，则认为两粒子无差别，
  否则将打印出两粒子位置或速度不一致。
- `<file_1>`、`<file_2>` 待读入的两个 xyz 文件的路径。
