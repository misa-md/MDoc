---
id: version-0.2.0-configure
title: 配置文件
sidebar_label: 配置文件
original_id: configure
---

Crystal MD从 v0.2.0开始，使用toml作为配置文件的格式，关于toml的相关标准请参考[toml-lang](https://github.com/toml-lang/toml)。

## 1.示例

以下展示了Crystal MD配置文件的部分示例：
```toml
title = "Crystal-MD Configure File"
#<a href='https://github.com/toml-lang/toml'>toml</a> configure file for Crystal-MD application,
#designed by <a href='mailto:genshenchu@gmail.com'>genshen</a>"

#for BCC struct
[simulation]
phasespace = [50, 50, 50]
cutoff_radius = 5.60
lattice_const = 2.85532
timesteps =  10

[simulation.createphase]
#createphase = [600, 466953]
create_phase = true
create_t_set = 600.0
create_seed = 466953

[simulation.collision]
collision_steps = 2
lat = [2, 2, 2, 0]
collision_v = [5.0, 5.0, 5.0]

# potential file config
[simulation.potential_file]
type = "setfl"
filename = "FeCuNi.eam.alloy"
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
