---
id: run-md
title: "运行 Crystal MD"
sidebar_label: "运行 Crystal MD"
original_id: run-md
---


我们假设你通过以上步骤已经完成了Crystal MD的编译构建工作，
编译完成的二进制可执行文件位于`$MD_PATH/build/bin/` 目录下。

## 1.运行
你可以使用 `mpirun` 命令运行并行的Crystal MD分子动力学软件。
例如，下面的示例中，使用4个MPI进程运行Crystal MD，并指定配置文件路径为和example同一目录下的`config.toml`文件。

?> 关于配置文件的相关说明请参考**配置项**等相关章节。

```bash
cd $MD_PATH/example
mpirun -n 4 ../build/bin/CrystalMD -c config.toml
```

更多信息可以通过执行`$MD_PATH/build/bin/CrystalMD --help`命令查看。

```bash
$ cd $MD_PATH
$ build/bin/CrystalMD --help
  build/bin/CrystalMD {OPTIONS}

    This is Crystal MD program.

  OPTIONS:

      -h, --help                    Display this help menu
      -c[conf], --conf=[conf]       The configure file
```

## 2.运行结果

运行结束后，example目录下会生成 atom dump 文件，按照每个进程输出。
文件名为 `dump_{rank id}.atom`，其中`{rank id}`为进程的rank id。
