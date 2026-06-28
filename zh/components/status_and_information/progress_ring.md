---
title: 进度环
date: 2024-01-01 00:00:00
permalink: /zh/components/status_and_information/progress_ring/
---

# 进度环

## 进度环 (ProgressRing)

<div align="center">
  <img src="/img/progress_ring.png" style="border-radius:12px;">
</div>

* 设置` IsIndeterminate=`属性为`True`以显示不确定eterminate状态  
* 显示百分比 `ShowPercent`


```xml
<ui:ProgressRing
    Width="256"
    Height="256"
    IsIndeterminate="False"
    Maximum="100"
    Minimum="0"
    Value="50"/>
```