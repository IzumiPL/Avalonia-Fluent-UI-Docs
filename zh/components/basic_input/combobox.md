---
title: 下拉框
date: 2024-01-01 00:00:00
permalink: /zh/components/basic_input/combobox/
---

# 下拉框


## 下拉框 (ComboBox)

<div align="center">
  <img src="../../../public/img/combo_box.png"  style="border-radius:12px;">
</div>

```xml
<ComboBox Width="256" ItemsSource="{Binding Items}" SelectedIndex="0" MaxDropDownHeight="256"></ComboBox>
```

## 多选下拉框 (MultiSelectionComboBox)

<div align="center">
  <img src="/img/multi_selection_combo_box.png"  style="border-radius:12px;">
</div>

```xml
<ui:MultiSelectionComboBox Width="328" ItemsSource="{Binding Items}"></ui:MultiSelectionComboBox>
```