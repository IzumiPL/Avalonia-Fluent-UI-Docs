---
title: 更新日志
date: 2024-01-01 00:00:00
permalink: /zh/pages/changelog/
---

# 更新日志

## v2.0.5

#### 修复

* 修复了 `NumericUpDown` 增加,减少按钮显示错误问题
* 修复了 `SplitView` 当 `PanePlacment` 为 `Top` `Bottom` 面板显示错误问题
* 修复了 `FluentWindow` 在 `windows10` 上设置圆角边框样式错误问题
* 修复在 `Linux` 上 `CanResize` 设置为 `False` 时还可改变窗口大小的问题

#### 其他更改

* `PopupDrawer` 添加关闭按钮
* 优化了 `AutoCompleteBox` 弹出补全框样式
* `FluentColorView` 新增 `ColorSpectrumShape` `IsAlphaVisible` 属性
* 优化了 `ToolTipSlider` 工具提示显示
* 修改了 `RangeSlider` 工具提示显示效果, 默认同时显示两个
* `SegmentedView` `SegmentedToggleView` 添加动画配置属性 `AnimationDuration` 和 `AnimationEasing` 
* `AvaloniaFluentTheme` 移除 `CurrentAccentColor` `CustomAccentColor` 统一更改为 `AccentColor`, 并添加 `Loale` 属性
* 重构 `SmoothScrollContentPresenter` `SingleDirectionScrollContentPresenter` 平滑滚动实现方式, 优化了视觉体验
* 重构 `SmoothScrollSnapContentPresenter` 滚动吸附方式
* 重构 `FluentWindow` 标题栏, 默认使用 `FluentTitleBar` 作为默认标题栏
* 重构 `TabView` 拖拽排序并修复拖拽导致程序崩溃问题, 并移除 `AllowDropTabs` 属性
* 优化了 `NumberBox` 弹出增加减少窗口样式
* `PopupInfoBar` `ToastInfoBar` 添加 `Orientation(内容布局方向)` 属性 


#### 新增控件
* 添加 `TimeLine` 时间线控件
* 添加 `SegmentedToggleItem` 控件, 适用于 `SegmentedToggleView`

## v2.0.4

#### 修复

* 修复了在Android平台下 `ComboBox` `NumberBox` `FluentFlyout` 打开时崩溃的问题
* 修复 `SelectableTextBlock` 使用了自定义 `ContextFlyout` 时鼠标悬停手势样式错误问题
* 修复 ShortchutKeyPicker 无法选择 `Enter` 和 `Space` 的问题

#### 其他更改

* 修改了 `SegmentedView` `SegmentedToggleView` 的底部指示器实现方法及动画
* 删除了 `Expander` 的 `ExpanderWinUIAnimationStyle` 样式
* `HyperlinkButton` 添加 `:visited` 样式
* 添加了 `TableView` 的Fluent样式支持
* `LocalizationService` 支持添加`resx`翻译文件到程序集内嵌资源
* 修改了 `ExpanderSettingCard` 实现方法
* Avalonia 版本升级到 `12.1.0`

#### 新增控件
* 添加 `FluentExpander` 带动画的展开控件 
* 添加 `Tag` 标签控件
* 添加 [PopupDrawer](/zh/components/dialog/flyout.md#弹出抽屉-popupdrawer) 弹出抽屉控件
* 添加 [WizardView](/zh/components/navigation/wizard_view.md#向导视图-wizardview) 向导视图控件
* 添加 [GroupHeaderCard](/zh/components/layout/card.md#带标题的组设置卡groupheadercard) 设置卡组控件
* 添加 [OutlinedTextBox](/zh/components/text/text_box.md#轮廓文本框-outlinedtextbox) 轮廓文本框控件
* 添加 [ImageLabel](/zh/components/media/image_label.md#图片-imagelabel) 图片控件

## v2.0.3

* 优化了弹出控件的阴影效果
* 修改了[OutlineButton](/zh/components/basic_input/button.md#描边按钮-outlinepushbutton)的选中逻辑
* Avalonia版本升级到`12.0.5`


#### 新增控件
* [ColorDialog](/zh/components/dialog/color_picker.md#颜色选则器对话框-colordialog)
* [ColorPickerButton](/zh/components/dialog/color_picker.md#颜色选择按钮-colorpickerbutton)
* [FilledProgressBar](/zh/components/status_and_information/progress_bar.md#填充进度条-filledprogressbar)
* InfoBarHost
* [PopupInfoBar](/zh/components/status_and_information/info_bar.md#可以弹出消息条-popupinfobar)
* [ToastInfoBar](/zh/components/status_and_information/info_bar.md#toast信息条-toastinfobar)

## v2.0.2

* 修改`AppWindow`为 [FluentWindow](/zh/components/window/fluent_window)
* 删除了一些不必要的资源

## v2.0.1

* 添加默认字体
* `MultSelectionComboBox`支持Content属性
* `ProgressRing`添加显示百分比属性
* `NavigationView` `NavigationViewItem` 添加样式 `MSNavigationView` `MSNavigationViewItem` 

#### 新增控件
* [ShortcutKeyPanel](/zh/components/pickers/shortcut_key_picker#快捷键面板-shortcutkeypanel)
* [ShortcutKeyPicker](/zh/components/pickers/shortcut_key_picker.md#快捷键选择器-shortcutkeypicker)
* HyperlinkLabel
* [Avatar](/zh/components/view/avatar.md#头像-avatar)
* [FileDropPicker](/zh/components/pickers/file_folder_drop_picker.md#文件选择器-filedroppicker)
* [FolderDropPicker](/zh/components/pickers/file_folder_drop_picker.md#文件夹选择器-folderdroppicker)

## v2.0.0

* 更新Avalonia版本到12.0.3
* 修复了一些已知问题

#### 添加控件

* [LabelTextBox](/zh/components/text/text_box.md#带标签的输入框)
* [FilledToolButton](/zh/components/basic_input/button.md#填充工具按钮-filledtoolbutton)
* [Card](/zh/components/layout/card.md#卡片-card)
* [SimpleCard](/zh/components/layout/card.md#简单卡片-simplecard)
* [HeaderCard](/zh/components/layout/card.md#带标题的卡片-headercard)
* [ElevatedCard](/zh/components/layout/card.md#elevatedcard-elevatedcard)
* [SettingCard](/zh/components/layout/card.md#可点击的设置卡-settingsexpander)

## v1.0.3


## v1.0.1

#### 添加了一新控件
* [FlipView](/zh/components/view/flip_view.md#翻转视图-flipview)
* [SingleDirectionScrollViewer](/zh/components/scroll/smooth_scroll.md#平滑滚动区域-smoothscrollviewer)
* PipsPager
* [ToolTipSlider](/zh/components/basic_input/slider.md#带工具提示的滑动条-tooltipslider)
* [RoundListBox](/zh/components/view/list_box.md#圆角列表-roundedlistbox)
* [SubTitleRadioButton](/zh/components/basic_input/button.md#带子标题的单选按钮-subtitleradiobutton)
* [OutlinePushButton | OutlineToolButton](/zh/components/basic_input/button.md#描边按钮-outlinepushbutton)
* [FilledPushButton](/zh/components/basic_input/button.md#填充按钮-filledpushbutton)
* [SegmentedView | SegmentedToggleView](/zh/components/navigation/top_navigation.md#分段导航视图-segmentedview)
* [MulitSelectionComboBox](/zh/components/basic_input/combobox.md#多选下拉框-multiselectioncombobox)
 
### 样式
* PushButton, ToolButton添加`Round` `Accent Round` `Outlined` `Round Outlined`样式

* RadioButton 添加Theme `ChipsRadioButton` 样式

### 多语言
* 添加了 `en-US` `zh-CN` `ja-JP` 的默认翻译支持, 可添加自定义翻译语言, 详细介绍请看[多语言](/zh/pages/localization.md)

## v1.0.0

### 新增功能

- 初始版本发布
- 支持基础控件
- 支持对话框和浮层
- 支持亮色和暗色主题