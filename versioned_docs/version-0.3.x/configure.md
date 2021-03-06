---
id: configure
title: "配置文件"
sidebar_label: "配置文件"
original_id: configure
---

Crystal MD从 v0.2.0开始，使用toml作为配置文件的格式，关于toml的相关标准请参考[toml-lang](https://github.com/toml-lang/toml)。

## 1.示例

以下展示了Crystal MD配置文件的部分示例：
```toml
title = "Crystal-MD Configure File"
version = "0.3.0"
#<a href='https://github.com/toml-lang/toml'>toml</a> configure file for Crystal-MD application,
#designed by <a href='mailto:genshenchu@gmail.com'>genshen</a>"

#for BCC struct
[simulation]
phasespace = [50, 50, 50]
cutoff_radius_factor = 1.96125
lattice_const = 2.85532
timesteps =  10
timesteps_length = 0.001

    [simulation.createphase]
    create_phase = true
    create_t_set = 600.0
    create_seed = 466953
    #read_phase_filename = ""

    # types of alloy
    [simulation.alloy]
        create_seed = 1024
        [simulation.alloy.ratio]
            Fe = 97
            Cu = 2
            Ni = 1

    [simulation.collision]
    collision_step = 2
    lat = [2, 2, 2, 0]
    pka = 6.8
    direction = [1.0, 1.0, 1.0]

    # potential file config
    [simulation.potential_file]
    type = "setfl"
    filename = "FeCuNi.eam.alloy"

[output]
atoms_dump_mode = "copy"
atoms_dump_file_path = "crystal_mdl.{}.out"
origin_dump_path = "crystal_mdl.origin.out"
atoms_dump_interval = 10
by_frame=true
    [output.logs]
    logs_mode = "console"
    logs_filename = ""

```

## 2.使用配置文件
你可以在运行Crystal MD程序时，通过命令行参数指定配置文件路径，程序能够读取配置文件，以进行后续模拟，例如：

```bash
mpirun -n 4 /path/of/CrystalMD  -c /path/of/config.toml
```
或者：

```bash
mpirun -n 4 /path/of/CrystalMD  --conf=/path/of/config.toml
```
