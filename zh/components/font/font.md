---
title: 字体
date: 2024-01-01 00:00:00
permalink: /zh/components/font/font/
---

# 字体

## 默认字体
```xml
<FontFamily x:Key="DefaultFontFamily">/Assets/Fonts/MiSans-Regular.otf#MiSans</FontFamily>
```

### 替换字体

```xml
<Application.Resources>
    <ResourceDictionary>
        <FontFamily x:Key="DefaultFontFamily">你的字体路径</FontFamily>
    </ResourceDictionary>
</Application.Resources>
```