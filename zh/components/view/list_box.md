---
title: 列表
date: 2024-01-01 00:00:00
permalink: /zh/components/view/list_box/
---

# 列表

### 列表 (ListBox)

<div align="center">
    <img src="/img/list_box.png" style="border-radius:12px;">
</div>

```xml
<ListBox
    Name="ListBox"
    Width="500"
    Height="300"/>
```
```csharp
string[] items = new string[32];
for (int i = 1; i <= 32; i++)
{
    items[i - 1] = $"Item {i}";
}

ListBox.ItemsSource = items;
```


## 圆角列表 (RoundedListBox)

<div align="center">
    <img src="/img/round_list_box.png" style="border-radius:12px;">
</div>

```xml
 <ui:RoundListBox
Name="RoundListBox"
Width="500"
Height="300"/>
```
```csharp
string[] items = new string[32];
for (int i = 1; i <= 32; i++)
{
    items[i - 1] = $"Item {i}";
}

RoundListBox.ItemsSource = items;
```