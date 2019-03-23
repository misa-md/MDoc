# 快速入门

本页使用[Docker](https://docs.docker.com/)作为环境运行Crystal MD程序，以便能够快速了解Crystal MD 程序的特性。  
但如果你需要考虑高性能或希望在多个计算节点甚至超算上运行该程序，推荐使用从源码编译的方式安装运行，这种方式能够针对不同架构进行优化。

在开始之前，需要按照Docker的相关[文档](https://docs.docker.com/)，安装并配置Docker。

## 获取源码
```bash
git clone https://git.gensh.me/HPCer/CrystalMD/CrystalMD.git
```

## 编译Docker镜像
```bash
cd CrystalMD
docker build --rm -t crystal-md:latest .
```

## 运行example
```bash

```