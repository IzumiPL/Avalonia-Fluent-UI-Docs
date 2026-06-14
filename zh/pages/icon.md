---
title: 图标
date: 2024-01-01 00:00:00
permalink: /zh/pages/icon/
---

# 图标使用

Avalonia Fluent UI 提供了丰富的图标支持。

## 图标类型

### 1. Fluent 图标

使用内置的 Fluent 图标系统：

```xml
// 引入图标
xmlns:fi="clr-namespace:AvaloniaFluentUI.Icons;assembly=AvaloniaFluentUI"

<ui:PushButton Content="保存" IconSource={x:Static fi:FluentIcon.Save}""/>
```

### 2. Segoe Fluent Icons

使用 Windows 的 Segoe Fluent Icons 字体：

```xml
<TextBlock Text="&#xE74E;" FontFamily="Segoe Fluent Icons"/>
```

### 3. 自定义图标

可以使用任意 PathGeometry 作为图标：

```xml
<PathIcon Data="M 10,10 L 20,20 L 30,10 Z"/>
```

## 使用图标按钮

```xml
<fi:ToolButton Content="{x:Static fi:FluentIcon.SaveIcon}"/>
```

## 图标大小

可以通过 IconWidth 和 IconHeight 属性控制图标大小：

```xml
<fi:ToolButton Content="{x:Static fi:FluentIcon.SaveIcon}" IconWidth="16" IconHeight="16"/>

```