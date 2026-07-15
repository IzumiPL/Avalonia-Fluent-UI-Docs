---
title: 弹出组件
date: 2024-01-01 00:00:00
permalink: /zh/components/dialog/flyout/
---

# 弹出组件


## 弹出组件 (FluentFlyout)
<div align="center">
  <img src="/img/flyout.png"  style="border-radius:12px;">
</div>

```xml
<Button Width="128" Content="显示弹出窗口">
    <Button.Flyout>
        <ui:FluentFlyout Placement="Top">
            <Border Margin="0" Padding="0">
                <Grid
                    Margin="0"
                    ColumnDefinitions="*, *"
                    RowDefinitions="Auto, Auto, Auto, Auto">
                    <TextBlock
                        Grid.Row="0"
                        Grid.ColumnSpan="2"
                        Margin="15,15,15,1"
                        HorizontalAlignment="Left"
                        FontSize="24"
                        Text="无名" />
                    <TextBlock
                        Grid.Row="1"
                        Grid.ColumnSpan="2"
                        Margin="15,1,15,15"
                        HorizontalAlignment="Left"
                        Text="左眼用来忘记你，右眼用来记住你。" />

                    <Separator
                        Grid.Row="2"
                        Grid.ColumnSpan="2"
                        HorizontalAlignment="Stretch" />

                    <ui:ToolButton
                        Grid.Row="3"
                        Grid.Column="0"
                        Height="35"
                        HorizontalAlignment="Stretch"
                        Classes="Transparent"
                        Content="{x:Static fi:FluentIcon.Accept}" />
                    <ui:ToolButton
                        Grid.Row="3"
                        Grid.Column="1"
                        Height="35"
                        HorizontalAlignment="Stretch"
                        Classes="Transparent"
                        Content="{x:Static fi:FluentIcon.Close}"
                        IconHeight="12"
                        IconWidth="12" />
                </Grid>
            </Border>
        </ui:FluentFlyout>
    </Button.Flyout>
</Button>
```

## 带图片的弹出组件
<div align="center">
  <img src="/img/img_flyout.png"  style="border-radius:12px;">
</div>

```xml
<Button Content="显示带图片的弹出组件">
    <Button.Flyout>
        <ui:FluentFlyout Placement="Right">
            <Grid
                Width="450"
                Height="388"
                RowDefinitions="*, Auto, Auto, Auto">
                <Image
                    Grid.Row="0"
                    Source="avares://Temp/Assets/mc.jpg"
                    Stretch="UniformToFill" />
                <TextBlock
                    Grid.Row="1"
                    Margin="10,10,0,2"
                    HorizontalAlignment="Left"
                    FontFamily="Bold"
                    FontSize="20"
                    Text="Minecraft" />
                <SelectableTextBlock
                    Grid.Row="2"
                    Margin="10,0,10,2"
                    FontSize="12"
                    Text="Forge(全称 Minecraft Forge)是一个为《我的世界》Java版设计的开源模组加载器(Mod Loader), 它为开发者提供了一套标准的开发接口 让各种修改游戏功能的模组(Mod)能够互相兼容并在同一个游戏客户端中运行。"
                    TextWrapping="WrapWithOverflow" />
                <Button
                    Grid.Row="3"
                    Width="128"
                    Margin="0,0,10,10"
                    HorizontalAlignment="Right"
                    Content="Action" />
            </Grid>
        </ui:FluentFlyout>
    </Button.Flyout>
</Button>
``` 