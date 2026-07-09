---
title: 颜色选择器
date: 2024-01-01 00:00:00
permalink: /zh/components/dialog/color_picker/
---

# 颜色选择器

## 颜色选择器 (ColorPicker)

<div align="center">
  <img src="/img/color_picker.png"  style="border-radius:12px;">
</div>

```xml
<ColorPicker/>
```


## 颜色选则器对话框 (ColorDialog)

<div align="center">
  <img src="/img/color_dialog.png"  style="border-radius:12px;">
</div>

* 可通过`ColorChanged`获取颜色改变信号

```xml
<ui:ColorDialog Name="ColorDialog"/>
<Button
  HorizontalAlignment="Center"
  Click="OnShowColorDialog"
  Content="Show Color Dialog"/>
```

```csharp
private async void OnShowColorDialog(object? sender, RoutedEventArgs e)
{
    var result = await ColorDialog.ShowAsync(this);
}
```


## 颜色选择按钮 (ColorPickerButton)

<div align="center">
  <img src="/img/color_picker_button.png"  style="border-radius:12px;">
</div>


* 用于展示选择的按钮，点击会弹出颜色选择对话框

```xml
<StackPanel
  HorizontalAlignment="Center"
  Orientation="Horizontal"
  Spacing="8">
  <ui:ColorPickerButton Color="DeepPink"/>
  <ui:ColorPickerButton Color="DeepSkyBlue"/>
  <ui:ColorPickerButton Color="Aquamarine"/>
</StackPanel>
```
