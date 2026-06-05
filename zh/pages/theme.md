---
title: 主题
date: 2024-01-01 00:00:00
permalink: /zh/pages/theme/
---

# 主题设置

Avalonia Fluent UI 支持亮色和暗色两种主题模式。

## 主题模式

### 跟随系统

默认情况下，应用会跟随操作系统的主题设置：

```xml
<Application xmlns="https://github.com/avaloniaui"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:fluent="using:AvaloniaFluentUI.Styling"
             x:Class="YourApp.App"
             RequestedThemeVariant="Default" // 设置默认主题
              >
    <Application.Styles>
        <fluent:FluentAvaloniaTheme 
        CustomAccentColor="DeepPink" // 自定义主题色
        >
    </Application.Styles>
</Application>
```

## 运行时切换主题

* 通过获取FluentAvaloniaTheme实例切换主题

```csharp
// 获取实例
FluentAvaliniaTheme.Instance;

// 切换到暗色主题
FluentAvaliniaTheme.Instance.CurrentTheme = ThemeVariant.Dark;

// 切换到亮色主题
FluentAvaliniaTheme.Instance.CurrentTheme = ThemeVariant.Light;
```

* 主题,主题色更改事件

```csharp
// 订阅主题更改事件
FluentAvaloniaTheme.ThemeChanged += (_, theme) =>
{
    Console.WriteLine($"当前主题: {theme}")
};

// 订阅主题色更改事件
FluentAvaloniaTheme.ThemeColorChanged += (_, color) =>
{
    Console.WriteLine($"当前主题色: {color}")
};
```