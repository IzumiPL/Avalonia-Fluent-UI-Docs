---
title: 卡片
date: 2024-01-01 00:00:00
permalink: /zh/components/layout/card/
---

## 简单卡片 (SimpleCard)

<div align="center">
  <img src="/img/simples_card.png"  style="border-radius:12px;">
</div>

* 卡片控件,Content可放任意内容

```xml
<ui:SimpleCard>
      <SelectableTextBlock
          HorizontalAlignment="Center"
          VerticalAlignment="Center"
          Text="卡片" />
</ui:SimpleCard>
```

## 卡片 (Card)

* 和`SimpleCard`卡片控件不同的是, 他会随鼠标进入变化

<div align="center">
  <img src="/img/card.png"  style="border-radius:12px;">
</div>


```xml
<ui:Card Width="512">
        <TextBlock
            HorizontalAlignment="Center"
            VerticalAlignment="Center"
            Text="简单卡片, 鼠标进入改变样式" />
</ui:Card>
<ui:Card Classes="Outlined">
    <TextBlock
        HorizontalAlignment="Center"
        VerticalAlignment="Center"
        Text="简单卡片, 鼠标进入改变样式 (Outlined Style)" />
</ui:Card>
```


## 带标题的卡片 (HeaderCard)

<div align="center">
  <img src="/img/header_card.png"  style="border-radius:12px;">
</div>

```xml
<ui:HeaderCard Header="系统要求">
  <Panel Height="52">
      <Panel
          Width="18"
          Height="18"
          HorizontalAlignment="Left"
          VerticalAlignment="Top">
          <Ellipse
              Name="IconBackground"
              Width="18"
              Height="18"
              VerticalAlignment="Top"
              Fill="{DynamicResource SystemFillColorSuccessBrush}" />
          <ui:FontIcon
              Width="18"
              Height="18"
              VerticalAlignment="Top"
              FontFamily="{StaticResource SymbolThemeFontFamily}"
              FontSize="10"
              Foreground="{DynamicResource TextFillColorInverseBrush}"
              Glyph="&#xE10B;" />
      </Panel>
      <SelectableTextBlock
          Margin="24,0,0,0"
          VerticalAlignment="Top"
          Text="此产品适用于你的设备。具有复选标记的项目符合开发" />
      <HyperlinkButton
          Margin="-11,0,0,0"
          VerticalAlignment="Bottom"
          Content="详细信息" />
  </Panel>
</ui:HeaderCard>
```

## ElevatedCard (ElevatedCard)

<div align="center">
  <img src="/img/elevated_card.png"  style="border-radius:12px;">
</div>

* `ElevatedCard`是带阴影的卡片,鼠标移入时会显示阴影和上移动画

```xml
<ui:ElevatedCard Width="256" Height="256">
  <Panel>
    <TextBlock
      HorizontalAlignment="Center"
      VerticalAlignment="Center"
      FontSize="86"
      Text="🥰" />
    <TextBlock
      HorizontalAlignment="Center"
      VerticalAlignment="Bottom"
      Classes="SubTitle"
      Text="Kiss" />
  </Panel>
</ui:ElevatedCard>
<ui:ElevatedCard Width="256" Height="256">
  <Panel>
    <TextBlock
      HorizontalAlignment="Center"
      VerticalAlignment="Center"
      FontSize="86"
      Text="🥵" />
    <TextBlock
      HorizontalAlignment="Center"
      VerticalAlignment="Bottom"
      Classes="SubTitle"
      Text="Kiss" />
  </Panel>
</ui:ElevatedCard>
<ui:ElevatedCard Width="256" Height="256">
  <Panel>
    <TextBlock
      HorizontalAlignment="Center"
      VerticalAlignment="Center"
      FontSize="86"
      Text="😭" />
    <TextBlock
      HorizontalAlignment="Center"
      VerticalAlignment="Bottom"
      Classes="SubTitle"
      Text="Kiss" />
  </Panel>
</ui:ElevatedCard>
```

## 设置卡 (SettingCard)

<div align="center">
  <img src="/img/setting_card.png"  style="border-radius:12px;">
</div>

```xml
<ui:SettingCard
    Description="我是设置卡的描述"
    Header="自定义图片的设置卡"
    IconSource="avares://Temp/Assets/Terminal.png" />
<ui:SettingCard
    Description="我是设置卡的描述"
    Header="Fluent Icon"
    IconSource="{x:Static fi:FluentIcon.GitHub}" />
<ui:SettingCard Description="H我是设置卡的描述" Header="没有图标的设置卡" />
```

## 可点击的设置卡 (SettingsExpander)

<div align="center">
  <img src="/img/clicked_setting_expander_card.png"  style="border-radius:12px;">
</div>

```xml
<ui:SettingsExpander
    ActionIconSource="ChevronRight"
    Description="设置当前系统的音量"
    Header="音量"
    IsClickEnabled="True"
    IconSource="{x:Static fi:FluentIcon.Volume}">
</ui:SettingsExpander>
```


## 可展开的设置卡

<div align="center">
  <img src="/img/expander_setting_card.png"  style="border-radius:12px;">
</div>

```xml
<ui:SettingsExpander
    Description="应用语音设置"
    Header="语音"
    IconSource="Microphone">
    <ui:SettingsExpanderItem Content="耳机" Description="设备名称"/>
    <ui:SettingsExpanderItem Content="设备" Description="带按钮"/>
    <ui:SettingsExpanderItem.Footer>
        <ui:PushButton
        Classes="Accent"
        Content="添加设备"
        IconData="{DynamicResource Add}"/>
    </ui:SettingsExpanderItem.Footer>
    </ui:SettingsExpanderItem>
    <ui:SettingsExpanderItem
    ActionIconSource="ChevronRight"
    Content="可点击"
    IsClickEnabled="True"/>
</ui:SettingsExpander>
```

## 带标题的组设置卡(GroupHeaderCard)

<div align="center">
  <img src="/img/group_header_card.png"  style="border-radius:12px;">
</div>

```xml
```