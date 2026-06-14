---
title: 文本输入框
date: 2024-01-01 00:00:00
permalink: /zh/components/text/text_box/
---

# 文本输入框

## 文本输入框 (TextBox)

<div align="center">
  <img src="/img/text_box.png" style="border-radius:12px;">
</div>

```xml
<TextBox Width="328" PlaceholderText="请输入文本"/>
```

## 带清空按钮的文本输入框

<div align="center">
  <img src="/img/text_box_clear.png" style="border-radius:12px;">
</div>



```xml
<TextBox Width="328" PlaceholderText="请输入文本" Classes="Clear"/>
```

## 密码输入框

<div align="center">
  <img src="/img/text_box_password.png" style="border-radius:12px;">
</div>



```xml
<TextBox
    Width="328"
    Classes="Password"
    PasswordChar="*"
    PlaceholderText="请输入密码"/>
```


## 搜索输入框 (SearchTextBox)

<div align="center">
  <img src="/img/search_text_box.png" style="border-radius:12px;">
</div>

* 当`IsReturnSearch`为`True`时，按下`Enter`键会触发搜索操作 `SearchCommand`, `OnSearchTriggered`, 接受的参数为搜索的文本 也可以点击搜索图标触发搜索操作  


```xml
<ui:SearchTextBox
    Width="328"
    IsReturnSearch="True"
    PlaceholderText="请输入要搜索的文本"/>
```

## 带标签的输入框

<div align="center">
  <img src="/img/label_text_box.png" style="border-radius:12px;">
</div>

* 可通过设置 `Prefix` 和 `Suffix` 来指定前后标签

```xml
<ui:LabelTextBox
  Width="328"
  PlaceholderText="请输入网址"
  Prefix="https://"
  Suffix=".com" />
```