---
title: 安装
date: 2024-01-01 00:00:00
permalink: /zh/pages/install/
---

# 安装指南

> [!Info]
> 本文档基于的 Avalonia 的版本是 `12.0.3`，AvaloniaFluentUI 的版本是 `2.0.0`，最新版可能与文档会有所不同，请您依据实际情况进行调整。

## 通过 NuGet 安装

使用 NuGet 包管理器安装 Avalonia Fluent UI

```bash
dotnet add package AvaloniaFluentUI
```

或者在 Visual Studio 的 NuGet 包管理器控制台中运行

```powershell
Install-Package AvaloniaFluentUI
```

## 手动引用

如需使用最新的的功能

你也可以从 [GitHub Releases](https://github.com/HiyorinI/AvaloniaFluentUi) 下载最新的文件，然后手动添加到项目中。

## 项目配置

### 1. 添加 XML 命名空间

在 AXAML 文件中添加以下命名空间声明：

```xml
xmlns:fluent="using:AvaloniaFluentUI.Controls"
```

### 2. 配置应用程序

在 `App.axaml` 中添加样式资源：

```xml
<Application xmlns="https://github.com/avaloniaui"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             xmlns:fluent="using:AvaloniaFluentUI.Styling"
             x:Class="YourApp.App">
    <Application.Styles>
        <fluent:FluentAvaloniaTheme />
    </Application.Styles>
</Application>
```

### 3. 设置主题模式（可选）

如果需要强制使用特定主题，可以在 `App.axaml` 中设置：

```xml
<Application xmlns="https://github.com/avaloniaui"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             x:Class="YourApp.App"
             RequestedThemeVariant="Dark">
    <!-- RequestedThemeVariant 可选值：Light, Dark, Default -->
</Application>
```

## 系统要求

- .NET 10.0 或更高版本
- Avalonia UI 12.0.3(11.*.\*版本可使用avalonia11.3.12分支)
- Windows 10/11, macOS, 或 Linux