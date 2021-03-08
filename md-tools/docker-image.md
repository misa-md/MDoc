---
id: docker-image
title: "使用 md-tools Docker 镜像"
sidebar_label: "使用 md-tools Docker 镜像"
---

除了直接使用二进制可执行文件外，也可以通过 docker 容器来运行 md-tools，
其中，md-tools 镜像位于 https://hub.docker.com/repository/docker/genshen/md-tools 。

下面的命令是运行 md-tools 镜像来执行结果分析的一个示例：
```bash
docker pull genshen/md-tools:latest
docker run -it --rm -v $(PWD):/tmp/output genshen/md-tools:latest ans -i 1000.xyz -o /tmp/output/md.df
```

:::tip 构建自己的 Docker 镜像
实际上，为了体验最新的功能，用户也可以自行构建 md-tools 的 docker 镜像，对应的 Dockerfile 位于 md-tools 源码仓库的根目录。  
参见：https://docs.docker.com/engine/reference/commandline/build/
:::
