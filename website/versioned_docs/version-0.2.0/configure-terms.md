---
id: version-0.2.0-configure-terms
title: 配置项说明
sidebar_label: 配置项说明
original_id: configure-terms
---

配置文件的示例见`$MD_PATH/example/config.toml`, 其中配置文件的各个字段如下，你可以根据你的需求修改各选项的值。

## simulation.phasespace
类型: Integer 数组, 长度: 3;  
说明：模拟盒子大小，分别为x、y、z三个维度上的尺寸；单位为晶格常数;

## simulation.lattice_const
类型: Float;  
说明: 晶格常数;

## simulation.cutoff_radius
类型: Float;  
单位: 埃, Å;  
说明: 截断半径;

## simulation.timesteps
类型：Integer;   
说明：模拟时间步数;  

## simulation.createphase
说明：模拟中创建原子的相关参数;  

## simulation.createphase.create_phase
类型：Boolean;  
说明：true表示程序初始化时，按照给定参数(如温度)随机创建原子；false表示读入已有的原子信息以创建原子;  

## simulation.createphase.create_t_set
类型：Float;  
单位：开, K;  
说明：初始化原子信息时的系统温度;  
 <!--仅 simulation.createphase.create_phase 为 true 时有效 -->

## simulation.createphase.create_seed
类型：Integer;  
说明：创建原子信息的随机数种子；仅 simulation.createphase.create_phase 为 true 时有效;  

## simulation.collision
说明：级联碰撞的相关参数;  

## simulation.collision.collision_step
类型：Integer;  
说明：指定级联碰撞开始的时间步;  

## simulation.collision.lat
类型：Integer 数组，长度: 4;  
说明：级联碰撞PKA原子位置，数组第4项为偏移值，一般设为0;  

## simulation.collision.collision_v
类型：Float 数组，长度: 3;    
说明：用于设置级联碰撞PKA原子速度，数组值分别表示x、y、z三个维度的速度，直接叠加到对应原子的速度上;  

## simulation.potential_file
说明：势函数文件相关参数;  

## simulation.potential_file.type
类型：String  
说明：势函数文件格式, 取值"setfl"或者"funcfl";  

## simulation.potential_file.filename
类型：String  
说明：势函数文件路径;  
