---
title: 多语言
date: 2024-01-01 00:00:00
permalink: /zh/pages/localization/
---

# 多语言

AvaloniaFluentUI提供了LocalizationService类,用于翻译内置组件的文本。使用方式较为简单，默认情况下翻译结果为`en-US`使用方法:

>[!Warning]
>须在获取值之前初始化里注册和设置默认地区,否则会获取不到Value 


```csharp
// 获取实例
LocalizationService.Instance;

// 设置默认语言
LocalizationService.Instance.SetCulture("zh-CN");

```
> [!Note]
> `LoadResxFile` `LoadResxDirectory`默认只加载当前语言的文件,语言改变后会自动加载对应的文件

默认内置控件暂只支持`en-US` `zh-CN` `ja-JP`三种翻译, 可添加自定义翻译语言,添加方法:
```csharp
// 通过字典添加
LocalizationService.Instance.AddValue("zh-CN:Key", "Value");
LocalizationService.Instance.AddValue("en-US:Key", "Value");

LocalizationService.Instance.AddValues(
    ["zh-CN:Key", "zh-CN:Key", ...],
    ["Value", "Value", ...]
);

// 通过 resx 文件添加
Strings.en-US.resx;
Strings.zh-CN.resx;
Strings.ja-JP.resx;
...
// 加载单个文件
LocalizationService.Instance.LoadResxFile(PATH);

// 加载整个文件夹
LocalizationService.Instance.LoadResxDirectory(DIR);

// 获取 Value
// 通过 XAML
Text="{Binding Source={x:Static locale:LocalizationService.Instance}, Path=[Key]}"

// 通过代码
LocalizationService.Instance.GetString("Key");
LocalizationService.Instance.GetString("Key", "CultureInfo");

```