---
id: build
title: "编译构建"
sidebar_label: "编译构建"
---

## 构建环境
在编译构建之前，请确保系统上安装了 [go](https://golang.org) 和 [rust](http://rust-lang.org) 工具链及 C 工具链(C编译器、链接器等)。  

## 构建 md-tools
获取 md-tools 源代码后，可在源码跟目录执行以下命令进行构建。
```bash
cargo build --release
```
执行命令后，可在 `target/release` 目录下找到对应的可执行文件。
当然，如果需要构建 debug 模式下的可执行文件，可直接执行 `cargo build` 命令。

:::tip 指定 C 编译器
如果编译构建时需要指定 C 编译器，可以使用 CC 环境变量，例如 `CC=clang cargo build`
:::

:::tip 指定链接器
如果编译构建时需要指定 C 编译器，可在 cargo 的配置文件中的 `target.linker` 项中指定链接器，具体参见 https://doc.rust-lang.org/cargo/reference/config.html#targettriplelinker 。
:::

## 交叉编译
我们可以利用交叉编译，来将 md-tools 构建到其他的运行平台（如在 Linux 系统中构建可在 winodws 上运行的可执行文件）。  
md-tools 采用 C、Go、Rust 混合编写，C 代码和 Go 代码均会编译成静态库，然后和 rust 代码一块链接成为可执行文件。
其中，C 代码会被 [cc crates](https://crates.io/crates/cc)  构建为静态库。可用 `CC` 环境变量来指定编译器，详细请参考 cc 库的[相关文档](https://crates.io/crates/cc)。
Go 代码会被 Go 编译器编译成为静态库，可利用相关的 Go 环境变量指定目标 CPU 架构、目标操作系统（如`GOARCH`、`GOOS`）。

例如，在 macOS 平台上，采用 C 编译器 `x86_64-w64-mingw32-gcc`，将 md-tools 源码编译到 windows amd64 架构的可执行文件，可使用以下命令：
```bash
CC=x86_64-w64-mingw32-gcc CGO_ENABLED=1 GOARCH=amd64 GOOS=windows \
  cargo build --target=x86_64-pc-windows-gnu --release
```
以上命令编译得到的可执行文件将位于 `target/x86_64-pc-windows-gnu/release` 目录下。

## 关于构建的额外文档
关于 md-tools 构建的内容，如若未在本小节描述详尽，可参考 md-tools 代码仓库中的相关文档：
https://github.com/misa-md/md-tools/blob/master/README.md#build 。
此外，如若希望查看**最新的**构建方式，也可参考以上链接所指向的文档。