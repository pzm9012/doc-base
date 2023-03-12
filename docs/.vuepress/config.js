module.exports = {
    title: 'pzm9012 的文稿',
    description: 'pzm9012 的文稿',
    base: '/doc/',
    locales: {
      '/': {
        lang: 'zh-CN' // 将会被设置为 <html> 的 lang 属性
      }
    },
    themeConfig: {
        logo: '',
        lastUpdated: '最后更新：',
        nav: [
            { text: '语雀', link: 'https://yuque.com/pzm9012/ct5ume/' },
            { text: '博客', link: 'https://pzm9012.github.io'}
          ],
        sidebar: 
        [
          ['/', '说明'],
         {
            title: 'deepin 常用资源整理',   // 必要的
            path: '/deepin-src-col/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
               ['/deepin-src-col/sec-1', '一、综合'],
               ['/deepin-src-col/sec-2', '二、系统'],
               ['/deepin-src-col/sec-3', '三、硬件和设备'],
               ['/deepin-src-col/sec-4', '四、应用软件'],
               ['/deepin-src-col/sec-5', '五、社区与论坛'],
               ['/deepin-src-col/sec-6', '六、更多']
            ]
        },                                                                                                         
        ],
        docsRepo: 'pzm9012/doc-base',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页'
      }
  }
