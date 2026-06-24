---
title: 翻转视图
date: 2024-01-01 00:00:00
permalink: /zh/components/view/flip_view/
---

# 翻转视图


## 翻转视图 (FlipView)

<div align="center">
    <img src="/img/flip_view.png" style="border-radius:12px;">
</div>

* 通过`DecodeToHeight`属性缩放到指定高度, 只能缩放一项, 建议缩放, 不然图片像素过高, 图片太多就会导致内存占用变高

* 切换页面无需释放图片, 内部会自动处理图片释放

* 可通过`Orientation`属性设置轮播方向, 默认水平轮播, 可选值为`FlipOrientation.Horizontal`和`FlipOrientation.Vertical`

* `AutoPlay`只有在加载到了视觉树后才会生效, 脱离视觉树自动停止自动播放, 如果脱离时是AutoPlay,再次挂载到视觉树会恢复播放

```xml
<ui:FlipView
    Name="FlipView"
    Width="648"
    Height="400"/>
```
```csharp
 FlipView.ImageSource = new[]
{
    "avares://Test/Assets/1.jpg",
    "avares://Test/Assets/2.jpg",
    "avares://Test/Assets/3.jpg",
    "avares://Test/Assets/4.jpg",
    "avares://Test/Assets/6.jpg",
    "avares://Test/Assets/7.jpg",
};

// 缩放到指定高度, 只能缩放一项
// FlipView.DecodeToWidth = 400;
FlipView.DecodeToHeight = 1024;
// 轮播方向
FlipView.Orientation = FlipOrientation.Vertical;
// 设置自动播放
FlipView.IsAutoPlay = true;
// 播放间隔
FlipView.Duration = TimeSpan.FromMilliseconds(1000);
// 图像插值模式
FlipView.ImageInterpolationMode = BitmapInterpolationMode.HighQuality;
```