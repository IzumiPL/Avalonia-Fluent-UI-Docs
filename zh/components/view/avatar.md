---
title: 头像控件
date: 2024-01-01 00:00:00
permalink: /zh/components/view/avatar/
---

# Avatar

## 头像 (Avatar)

<div align="center">
  <img src="/img/avatar.png"  style="border-radius:12px;">
</div>

* `IsCircular`为True则自动圆角, 如需自定义圆角弧度,请把它设置为False,通过`CornerRadius`设置

```xml
<StackPanel Orientation="Horizontal" Spacing="12">
    <ui:Avatar
        Width="64"
        Height="64"
        IsCircular="True"
        Source="avares://Test/Assets/11.png"/>
    <ui:Avatar
        Width="64"
        Height="64"
        IsCircular="True"
        Text="迪亚"/>
    <ui:Avatar
        Width="64"
        Height="64"
        CornerRadius="16"
        IsCircular="False"
        Text="迪亚"/>
</StackPanel>
```