import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: "Avalonia Fluent UI",
    description: "基于 Avalonia 的 Fluent Design 风格组件库",

    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }],
    ],

    themeConfig: {
        logo: '/img/logo.png',

        nav: [
            { text: '指南', link: '/zh/pages/about' },
            { text: '组件', link: '/zh/pages/components' },
            // { text: 'GitHub', link: 'https://github.com/HiyorinI' }
        ],

        sidebar: {
            '/zh/': [
                {
                    text: '指南',
                    items: [
                        { text: '简介', link: '/zh/pages/about' },
                        { text: '安装', link: '/zh/pages/install' },
                        { text: '快速开始', link: '/zh/pages/quickstart' },
                        { text: '主题', link: '/zh/pages/theme' },
                        { text: '图标', link: '/zh/pages/icon' },
                        { text: '多语言', link: '/zh/pages/localization' },
                        { text: '组件总览', link: '/zh/pages/components' },
                        { text: '更新日志', link: '/zh/pages/changelog' },
                    ]
                },
                {
                    text: '基础输入',
                    items: [
                        { text: '按钮', link: '/zh/components/basic_input/button' },
                        { text: '滑动条', link: '/zh/components/basic_input/slider' },
                        { text: '下拉框', link: '/zh/components/basic_input/combobox' },
                    ]
                },
                {
                    text: '日期和时间',
                    items: [
                        { text: '日历选择器', link: '/zh/components/date_time/calendar_date_picker' },
                        { text: '时间选择器', link: '/zh/components/date_time/time_picker' },
                    ]
                },
                {
                    text: '对话框',
                    items: [
                        { text: '对话框', link: '/zh/components/dialog/dialog' },
                        { text: '颜色选择器', link: '/zh/components/dialog/color_picker' },
                        { text: '弹出组件', link: '/zh/components/dialog/flyout' },
                        { text: '气泡弹窗', link: '/zh/components/dialog/teaching_tip' },
                    ]
                },
                {
                    text: "布局",
                    items: [
                        { text: '卡片', link: '/zh/components/layout/card' },
                    ]
                },
                {
                    text: '导航',
                    items: [
                        { text: '侧边导航', link: '/zh/components/navigation/navigation_view' },
                        { text: '顶部导航栏', link: '/zh/components/navigation/top_navigation' },
                        { text: '标签页', link: '/zh/components/navigation/tab_control' },
                        { text: '面包屑导航', link: '/zh/components/navigation/breadcrumb_bar' },
                    ]
                },
                {
                    text: '滚动',
                    items: [
                        { text: '滚动区域', link: '/zh/components/scroll/smooth_scroll' },
                    ]
                },
                {
                    text: '状态和信息',
                    items: [
                        { text: '信息徽章', link: '/zh/components/status_and_information/info_badge' },
                        { text: '消息条', link: '/zh/components/status_and_information/info_bar' },
                        { text: '进度条', link: '/zh/components/status_and_information/progress_bar' },
                        { text: '进度环', link: '/zh/components/status_and_information/progress_ring' },
                        { text: '工具提示', link: '/zh/components/status_and_information/tool_tip' },
                    ]
                },
                {
                    text: '文本',
                    items: [
                        { text: '输入框', link: '/zh/components/text/text_box' },
                        { text: '数字输入框', link: '/zh/components/text/number_box' },
                    ]
                },
                {
                    text: '选择器',
                    items: [
                        {text: '快捷键选择器', link: '/zh/components/pickers/shortcut_key_picker'},
                        {text: '文件 | 文件夹选择器', link: '/zh/components/pickers/file_folder_drop_picker'},
                    ]
                },
                {
                    text: '视图',
                    items: [
                        { text: '翻转视图', link: '/zh/components/view/flip_view' },
                        { text: '列表', link: '/zh/components/view/list_box' },
                        { text: '头像', link: '/zh/components/view/avatar' },
                    ]
                },
                {
                    text: '字体',
                    items: [
                        { text: '字体', link: '/zh/components/font/font' },
                    ]
                },
                {
                    text: '窗口',
                    items: [
                        { text: 'Fluent Window', link: '/zh/components/window/app_window' },
                    ]
                },
            ]
        },

        // 搜索配置
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                },
                // 搜索优化选项
                miniSearch: {
                    // 高亮搜索结果
                    highlight: true,
                    // 搜索时进行模糊匹配
                    fuzzy: 0.2
                }
            }
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/HiyorinI' }
        ],

        footer: {
            message: '基于 MIT 许可发布',
            copyright: 'Copyright © 2024 HiyorinI'
        },

        editLink: false,
        lastUpdated: {
            text: '上次更新'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        outline: {
            label: '页面导航'
        },
    },

    base: '/',
})
