---
id: overview
title: "Crystal MD 概览"
sidebar_label: "Crystal MD 概览"
original_id: overview
---

## Crystal MD 简介

Crystal MD 是一款面向大规模并行分子动力学模拟程序。
该程序在神威·太湖之光上，使用EAM势完成了4*10^12个原子的分子动力学模拟,为迄今为止(2018年)国际报道的最大规模的分子动力学模拟。
Crystal MD 程序在天河二号超级计算机上的模拟获得[2016年度"天河之星"优秀应用奖](http://www.nscc-gz.cn/newsdetail.html?7689)。

## Features
- Crystal MD 程序以规则晶格的BCC结构的金属原子为模拟对象（如Fe原子），支持自定义比例的杂质合金模拟；
- 可大规模并行，面向超算应用架构；
- 支持级联碰撞模拟；
- 支持EAM势；

## 限制
 - 当前，Crystal MD 程序仅支持BCC结构的原子晶格，不支持其他结构，如FCC结构；
 - Crystal MD 主要侧重于金属原子的模拟，不支持生物大分子的模拟；
 - 当前，Crystal MD仅支持EAM势。
