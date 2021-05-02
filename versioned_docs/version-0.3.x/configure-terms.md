---
id: configure-terms
title: "配置项说明"
sidebar_label: "配置项说明"
original_id: configure-terms
---

配置文件的示例见`$MD_PATH/example/config.toml`, 其中配置文件的各个字段如下，你可以根据你的需求修改各选项的值。

## simulation.phasespace
类型: Integer 数组, 长度: 3;  
说明：模拟盒子大小，分别为x、y、z三个维度上的尺寸；单位为晶格常数;

## simulation.lattice_const
类型: Float;  
单位: 埃, Å;  
说明: 晶格常数;

## simulation.cutoff_radius_factor
类型: Float;  
说明: 截断半径系数; 截断半径系数乘以晶格常数等于实际的截断半径长度;

## simulation.timesteps
类型：Integer;   
说明：模拟时间步数;  

## simulation.timesteps_length
类型：Float;  
单位：皮秒, ps;  
说明：模拟中每一个时间步长度;  

## simulation.createphase
说明：模拟中创建原子的相关参数;  

## simulation.createphase.create_phase
类型：Boolean;  
说明：true表示程序初始化时，按照给定参数(如温度)随机创建原子；false表示读入已有的原子信息以创建原子;  

## simulation.createphase.create_t_set
类型：Float;  
单位：开, K;  
说明：初始化原子信息时的系统温度;  

## simulation.createphase.create_seed
类型：Integer;  
说明：创建原子信息的随机数种子；仅 simulation.createphase.create_phase 为 true 时有效;  

## simulation.alloy
说明：合金元素的相关配置; 该部分仅simulation.createphase.create_phase 为 true 时有效;  

## simulation.alloy.create_seed
类型：Integer;  
说明：创建原子时，随机生成不同种类合金原子的随机数种子;  

## simulation.alloy.ratio
说明：创建原子时，指定随机生成的各类合金原子比例，例如各类合金的比例Fe:Cu:Ni = 97:2:1;

## simulation.alloy.ratio.Fe
类型：Integer;  
说明：创建合金时，合金中Fe元素的比例;  

## simulation.alloy.ratio.Cu
类型：Integer;  
说明：创建合金时，合金中Cu元素的比例;  

## simulation.alloy.ratio.Ni
类型：Integer;  
说明：创建合金时，合金中Ni元素的比例;  

## simulation.collision
说明：级联碰撞的相关参数;  

## simulation.collision.collision_step
类型：Integer;  
说明：指定级联碰撞开始的时间步;  

## simulation.collision.lat
类型：Integer 数组，长度: 4;  
说明：级联碰撞PKA原子位置，数组第4项为偏移值，一般设为0;  

## simulation.collision.pka
类型：Float  
说明：用于设置级联碰撞PKA原子能量，单位eV，直接叠加到对应原子的速度上; 

## simulation.collision.direction
类型：Integer 数组，长度: 3;  
说明：用于设置PKA能量对应的速度在三个维度(x,y,z)的分量，或者说是PKA入射方向; 

## simulation.potential_file
说明：势函数文件相关参数;  

## simulation.potential_file.type
类型：String  
说明：势函数文件格式, 取值"setfl"或者"funcfl"，目前仅支持 setfl 格式;  

## simulation.potential_file.filename
类型：String  
说明：势函数文件路径;  

## output.atoms_dump_mode
类型：String  
说明：输出模式，取值为"copy"或者"direct"；copy模式输出一个文件，二进制格式;  
direct模式输出多个文本文件(每个进程与每一个需要输出的时间步都对应一个文件)，一般用于程序调试;

## output.atoms_dump_file_path
类型：String  
说明：copy模式下，输出二进制文件路径;
如果设置了按帧输出(`output.by_frame`为true), 则文件路径中需要有一个大括号(如`crystal_mdl.{}.out`),程序输出时会将大括号替换为当前时间步数.  

## output.origin_dump_path
类型：String  
说明：copy模式下，输出级联碰撞前一个时间步的体系粒子，该选项指定输出的文件路径; 若该项为空，则不输出;

## output.atoms_dump_interval
类型：Integer  
说明：指定每隔一定时间步，输出一次系统中的所有原子信息;  

## output.by_frame
类型: Boolean  
说明: 每隔`output.atoms_dump_interval`项指定的时间步数为一帧.
按帧输出选项打开时,程序会每一帧生成一个文件并标记输出时的时间步，否则将会将所有的帧都写入到一个文件中.

## output.logs
程序日志:可以选择输出到stdio或者文件.

## output.logs.logs_mode
类型: String  
说明: 日志输出模式,可以为`console`(输出到stdio)或者`file`(输出到文件).

## output.logs.logs_filename
类型: String  
说明: 如果日志输出模式为file, 该选项指定文件路径.
