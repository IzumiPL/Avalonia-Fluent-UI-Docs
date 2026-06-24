---
title: 快捷键选择器
date: 2024-01-01 00:00:00
permalink: /zh/components/pickers/shortcut_key_picker/
---

# 快捷键选择器

## 快捷键面板 (ShortcutKeyPanel)

<div align="center">
  <img src="/img/shortcut_key_panel.png"  style="border-radius:12px;">
</div>

```xml
<ui:ShortcutKeyPanel Name="ShortcutKeyPanel" HorizontalAlignment="Center"/>
```

```csharp
ShortcutKeyPanel.Keys = ["Ctrl", "Alt", "C"];
```

## 快捷键选择器 (ShortcutKeyPicker)

<div align="center">
  <img src="/img/shortcut_key_picker.png"  style="border-radius:12px;">
</div>

```xml
 <ui:ShortcutKeyPicker
    HorizontalAlignment="Center"
    DefaultKeyGesture="Ctrl+Alt+B"
    KeyGesture="Ctrl+Alt+B"/>
```