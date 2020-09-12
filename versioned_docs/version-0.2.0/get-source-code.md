---
id: get-source-code
title: "获取源代码"
sidebar_label: "获取源代码"
original_id: get-source-code
---

你可以使用以下任意一种方式获取代码：git clone、下载源码包。
如果你已经拥有源代码，可以忽略此步骤，直接跳到[安装依赖](install_dep)小节。

!> 注：该文档中均使用 `$MD_PATH` 来指代Crystal MD源码目录。

## 1. git clone
如果你的系统中安装了git工具，可以使用git来clone源代码。
这样的好处是，你可以随时切换使用其他任意版本的代码。
```bash
git clone https://git.hpcer.dev/HPCer/CrystalMD/CrystalMD.git # https
```

或者，如果你配置了ssh key, 也可以使用ssh协议进行clone:
```bash
git clone ssh://git@git.hpcer.dev:2222/HPCer/CrystalMD/CrystalMD.git # ssh
```

上述 git clone 命令会创建一个名为 Crystal MD 的目录。
克隆完成后，你可以选择通过调用以下命令来构建特定分支（如版本分支）
```bash
$ cd $MD_PATH # Crystal MD源码目录
$ git checkout Branch_Or_Tag
# where ' Branch_Or_Tag' is the desired branch or tag.
```
例如，要使用 v0.2.0 版本而不是主分支，可使用以下命令进行切换 `git checkout v0.2.0`.

## 2.直接下载源码包
使用wget命令或者在浏览器中下载源代码压缩包。  
如，下载v0.2.0版本的源码包：
```bash
$ wget -O CrystalMD-v0.2.0.tat.gz \
  https://git.hpcer.dev/HPCer/CrystalMD/CrystalMD/repository/v0.2.0/archive.tar.gz
$ tar -zxvf CrystalMD-v0.2.0.tat.gz
```
