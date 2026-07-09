---
title: 进度条
date: 2024-01-01 00:00:00
permalink: /zh/components/status_and_information/progress_bar/
---

# 进度条

## 进度条 (ProgressBar)

<div align="center">
  <img src="/img/progress_bar.png" style="border-radius:12px;">
</div>

* 设置` IsIndeterminate=`属性为`True`以显示不确定eterminate状态

```xml
<ProgressBar
    Width="500"
    Maximum="100"
    Minimum="0"
    Value="50"/>
```
## 填充进度条 (FilledProgressBar)

<div align="center">
  <img src="/img/filled_progress_bar.png" style="border-radius:12px;">
</div>

* 设置`ShowProgressText`显示进度百分比

```xml
<ui:FilledProgressBar
  HorizontalAlignment="Center"
  Maximum="256"
  Minimum="0"
  Value="64"/>
```
