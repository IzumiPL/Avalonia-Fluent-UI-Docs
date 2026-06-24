---
title: 选择器
date: 2024-01-01 00:00:00
permalink: /zh/components/pickers/file_folder_drop_picker/
---

# 文件 | 文件夹选择器

## 文件夹选择器 (FolderDropPicker)

* `AllowMultiple` 是否支持多选, 只在选择模式下生效,拖拽无效
* `SelectionTitleBar` 选择对话框的标题
* `SuggestedStartLocation` 默认起始位置
* `SelectedButtonIsVisible` 选择按钮是否显示
* `Header` 选择器标题

<div align="center">
  <img src="/img/folder_drop_picker.png"  style="border-radius:12px;">
</div>


```xml
<ui:FolderDropPicker AllowMultiple="True" SuggestedStartLocation="C:\"/>
```

## 文件选择器 (FileDropPicker)

* `FileTypeFilter` 文件类型过滤

<div align="center">
  <img src="/img/file_drop_picker.png"  style="border-radius:12px;">
</div>


```xml
<ui:FileDropPicker AllowMultiple="True"/>
```


