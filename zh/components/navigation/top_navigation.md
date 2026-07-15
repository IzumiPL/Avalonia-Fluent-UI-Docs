---
title: 顶部导航
date: 2024-01-01 00:00:00
permalink: /zh/components/navigation/top_navigation/
---

# 顶部导航

### 分段导航视图 (SegmentedView)

<div align="center">
  <img src="/img/segmented_view.png"  style="border-radius:12px;">
</div>

```xml
<ui:SegmentedView SelectedIndex="0">
  <ui:SegmentedItem Content="主页" IsSelected="True"/>
  <ui:SegmentedItem Content="文件"/>
  <ui:SegmentedItem>
    <Grid ColumnDefinitions="*, *" ColumnSpacing="5">
      <PathIcon Data="{x:Static fi:FluentIcon.Video}"/>
      <TextBlock Grid.Column="1" Text="视图"/>
    </Grid>
  </ui:SegmentedItem>
  <ui:SegmentedItem Content="视频历史"/>
  <ui:SegmentedItem Content="音频历史"/>
  <ui:SegmentedItem Content="浏览历史"/>
  <ui:SegmentedItem Content="帮助"/>
  <ui:SegmentedItem Content="设置"/>
  <ui:SegmentedItem Content="关于"/>
  <ui:SegmentedItem>
    <Grid ColumnDefinitions="*, *" ColumnSpacing="5">
      <PathIcon Data="{x:Static fi:FluentIcon.Send}"/>
      <TextBlock Grid.Column="1" Text="发送"/>
    </Grid>
  </ui:SegmentedItem>
</ui:SegmentedView>
```

### 分段切换导航视图 (SegmentedToggleView)

* 可通过`Orientation`属性切换方向

<div align="center">
  <img src="/img/segmented_toggle_view.png"  style="border-radius:12px;">
</div>

```xml
<ui:SegmentedToggleView SelectedIndex="0">
  <ui:SegmentedItem Content="主页" IsSelected="True"/>
  <ui:SegmentedItem Content="文件"/>
  <ui:SegmentedItem>
    <Grid ColumnDefinitions="*, *" ColumnSpacing="5">
      <PathIcon Data="{x:Static fi:FluentIcon.View}"/>
      <TextBlock Grid.Column="1" Text="视图"/>
    </Grid>
  </ui:SegmentedItem>
  <ui:SegmentedItem Content="视频历史"/>
  <ui:SegmentedItem Content="音频历史"/>
  <ui:SegmentedItem Content="浏览历史"/>
  <ui:SegmentedItem Content="帮助"/>
  <ui:SegmentedItem Content="设置"/>
  <ui:SegmentedItem Content="关于"/>
  <ui:SegmentedItem>
    <Grid ColumnDefinitions="*, *" ColumnSpacing="5">
      <PathIcon Data="{x:Static fi:FluentIcon.Send}"/>
      <TextBlock Grid.Column="1" Text="发送"/>
    </Grid>
  </ui:SegmentedItem>
</ui:SegmentedToggleView>
```

