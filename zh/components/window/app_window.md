---
title: 窗口
date: 2024-01-01 00:00:00
permalink: /zh/components/window/app_window/
---

# 窗口

## Fluent 窗口 (AppWindow)

<div align="center">
    <img src="/img/app_window.png" style="border-radius:12px;">
</div>


* 可通过 `TitleBarContent` 定义窗口标题栏内的内容
```xml
<wnd:AppWindow
  x:Class="Test.Views.MainWindow"
  xmlns="https://github.com/avaloniaui"
  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
  xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:ui="clr-namespace:AvaloniaFluentUI.Controls;assembly=AvaloniaFluentUI"
  xmlns:vm="using:Test.ViewModels"
  xmlns:wnd="clr-namespace:AvaloniaFluentUI.Windowing;assembly=AvaloniaFluentUI"
  Title="Test"
  d:DesignHeight="450"
  d:DesignWidth="800"
  x:DataType="vm:MainWindowViewModel"
  Icon="/Assets/avalonia-logo.ico"
  mc:Ignorable="d">

  <wnd:AppWindow.TitleBarContent>
    <Grid ColumnDefinitions="*, Auto">
      <ui:SearchTextBox
        Grid.Column="0"
        Width="328"
        Margin="0,10,0,0"
        VerticalAlignment="Center"
        Watermark="请输入搜索文本"/>
      <ui:ToolButton
        Grid.Column="1"
        Width="46"
        Height="40"
        HorizontalAlignment="Right"
        VerticalAlignment="Stretch"
        Command="{Binding ToggleThemeCommand}"
        Content="M15 3v-2q0-0.406 0.297-0.703t0.703-0.297 0.703 0.297 0.297 0.703v2q0 0.406-0.297 0.703t-0.703 0.297-0.703-0.297-0.297-0.703zM8 7q0 0.406-0.297 0.703t-0.703 0.297-0.703-0.297l-2-2q-0.297-0.297-0.297-0.703t0.297-0.703 0.703-0.297 0.703 0.297l2 2q0.297 0.297 0.297 0.703zM27 4q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703l-2 2q-0.297 0.297-0.703 0.297t-0.703-0.297-0.297-0.703 0.297-0.703l2-2q0.297-0.297 0.703-0.297zM24 16v0.156q0 1.625-0.648 3.055t-1.75 2.492-2.547 1.68-3.055 0.617q-1.656 0-3.117-0.625t-2.547-1.711-1.711-2.547-0.625-3.117 0.625-3.117 1.711-2.547 2.547-1.711 3.117-0.625 3.117 0.625 2.547 1.711 1.711 2.547 0.625 3.117zM16 22h0.125q1.219 0 2.289-0.484t1.867-1.313 1.258-1.914 0.461-2.289-0.461-2.289-1.258-1.914-1.867-1.313-2.289-0.484h-0.125v12zM3 15q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297h-2q-0.406 0-0.703-0.297t-0.297-0.703 0.297-0.703 0.703-0.297h2zM31 15q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297h-2q-0.406 0-0.703-0.297t-0.297-0.703 0.297-0.703 0.703-0.297h2zM7 24q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703l-2 2q-0.297 0.297-0.703 0.297t-0.703-0.297-0.297-0.703 0.297-0.703l2-2q0.297-0.297 0.703-0.297zM28 27q0 0.406-0.297 0.703t-0.703 0.297-0.703-0.297l-2-2q-0.297-0.297-0.297-0.703t0.297-0.703 0.703-0.297 0.703 0.297l2 2q0.297 0.297 0.297 0.703zM17 29v2q0 0.406-0.297 0.703t-0.703 0.297-0.703-0.297-0.297-0.703v-2q0-0.406 0.297-0.703t0.703-0.297 0.703 0.297 0.297 0.703z"
        Theme="{StaticResource TransparentToolButton}"/>
    </Grid>
  </wnd:AppWindow.TitleBarContent>

</wnd:AppWindow>
```

> [!Warning]
> 如果是1.0.3及以前的版本, 如果设置了`TitleBarContent`, 需设置`TitleBarHitTestType`为`TitleBarHitTestType.Complex`, 否则会出现无法点击标题栏内容的情况

* 通过`EnableMica(true)` `EnabledAcrylicBlur(true)` 启用窗口效果

#### * 设置启动页面, 继承`IApplicationSplashScreen`实现成员方法
* `AppName` 应用名称
* `AppIcon` 应用图标
* `SplashScreenContent` 启动页面内容
* `RunTasks` 启动页面任务
* `MinimumShowTime` 启动页面最小显示时间
```csharp
using AvaloniaFluentUI.Controls.Windowing;

namespace Test.Views;

public partial class MainWindow : AppWindow 
{
    public MainWindow()
    {
        InitializeComponent();

        TitleBar.TitleBarHitTestType = TitleBarHitTestType.Complex;
        EnableWindowEffect(true);

        SplashScreen = new MainWindowSplashScreen();
    }
}

class MainWindowSplashScreen : IApplicationSplashScreen
{
    public string AppName => "Test";
    public IImage AppIcon => null;
    public object SplashScreenContent => null; 
    public Task RunTasks(CancellationToken cancellationToken)
    {
        return Task.Delay(1000);
    }

    public int MinimumShowTime => 1000;
}


```