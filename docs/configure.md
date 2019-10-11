---
id: configure
title: 配置文件
sidebar_label: 配置文件
---

Crystal MD 从 v0.4.0 开始，使用 [yaml](https://yaml.org) 格式开始作为配置文件的格式（v0.2.0 和 v0.3.x 使用 [toml](https://github.com/toml-lang/toml) 格式)。

## 1.示例

以下展示了Crystal MD配置文件的部分示例：
```yaml
# <a href='https://yaml.org'>yaml</a> configure file for Crystal-MD application,
# designed by <a href='mailto:genshenchu@gmail.com'>genshen</a>"

title: "Crystal-MD Configure File"
version: "0.4.0"
contributors:
  original_author: "BaiHe"
  original_author_email: "baihe_ustb@163.com"
  developers: ["BaiHe<baihe_ustb@163.com>", "ChuGenshen<genshenchu@gmail.com>"]
  organization: "USTB"

simulation:
  phasespace: [50, 50, 50]
  cutoff_radius_factor: 1.96125
  lattice_const: 2.85532
  def_timesteps_length: 0.001

potential:
  type: "setfl"
  file_path: "FeCuNi.eam.alloy"

creation:
  create_phase: true
  create_seed: 466953
  alloy:
    create_seed: 1024
    ratio:
      Fe: 97
      Cu: 2
      Ni: 1

output:
  dump:
    atoms_dump_mode: "copy"
    atoms_dump_file_path: "crystal_mdl.{}.out"
    origin_dump_path: "crystal_mdl.origin.out"
    atoms_dump_interval: 10
    by_frame: true
  thermo:
    interval: 0
  logs:
    logs_mode: "console"
    logs_filename: ""

stages:
  - name: rescale
    step_length: 0.001
    steps: 4
    rescale:
      t: 600
      every_steps: 2

  - name: collision
    step_length: 0.0001
    steps: 8
    set_v:
      collision_step: 2
      lat: [2, 2, 2, 0]
      energy: 6.8
      direction: [1.0, 1.0, 1.0]

  - name: run
    step_length: 0.001
    steps: 6
```

## 2.使用配置文件
你可以在运行Crystal MD程序时，通过命令行参数指定配置文件路径，程序能够读取配置文件，以进行后续模拟，例如：

```bash
mpirun -n 4 /path/of/CrystalMD  -c /path/of/config.yaml
```
或者：

```bash
mpirun -n 4 /path/of/CrystalMD  --conf=/path/of/config.yaml
```
