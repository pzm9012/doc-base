module.exports = {
    title: 'pzm9012 的文稿',
    description: 'pzm9012 的文稿',
    base: '/doc/',
    themeConfig: {
        logo: '',
        nav: [
            { text: '首页', link: '/' },
            { text: '语雀', link: 'https://yuque.com/pzm9012/ct5ume/' },
          ],
        sidebar: 
        [
         {
            title: 'Group 1',   // 必要的
            path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
               '/'
            ]
        },
        {
            title: 'Group 2',
            children: [ /* ... */ ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
                                                                                                                      
        ]
      }
  }