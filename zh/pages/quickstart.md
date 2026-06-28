---
title: 快速开始
date: 2024-01-01 00:00:00
permalink: /zh/pages/quickstart/
---

# 快速开始

### 添加 Avalonia Fluent UI 包

```bash
dotnet add package AvaloniaFluentUI
```

## 配置应用程序

### 修改 App.axaml

```xml
<Application xmlns="https://github.com/avaloniaui"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:fluent="using:AvaloniaFluentUI.Styling"
             x:Class="MyFluentApp.App">
    <Application.Styles>
        <fluent:AvaloniaFluentTheme />
    </Application.Styles>
</Application>
```

### 修改 MainWindow.axaml

```xml
<wd:FluentWindow xmlns="https://github.com/avaloniaui"
                     xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
                     xmlns:wd="using:AvaloniaFluentUI.Windoning"
                     xmlns:ui="using:AvaloniaFluentUI.Controls"
                     x:Class="MyFluentApp.MainWindow"
                     Title="My Fluent App"
                     Width="800" Height="600">

    <StackPanel Margin="20" Spacing="10">
        <TextBlock Text="欢迎使用 Avalonia Fluent UI"
                   FontSize="24"
                   FontWeight="Bold"/>

        <ui:PushButton Content="点击我"
                           Click="Button_Click"/>

        <ui:InfoBar Title="提示"
                        Message="这是一个 InfoBar 控件"
                        Severity="Informational"/>
    </StackPanel>
</wd:FluentWindow>
```

## 运行应用

```bash
dotnet run
```

## 下一步

现在你已经成功创建了一个使用 Avalonia Fluent UI 的应用。接下来可以：

- 浏览 [组件文档](/zh/pages/components) 了解可用的控件
- 学习 [主题设置](/zh/pages/theme) 自定义应用外观
- 查看 [图标使用](/zh/pages/icon) 了解如何使用图标

## 示例代码

完整的示例代码可以在 [GitHub 仓库](https://github.com/IzumiPL/Avalonia-Fluent-UI) 中找到。
