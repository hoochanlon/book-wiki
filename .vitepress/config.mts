import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  withSidebar(
    defineConfig({
    title: "读书笔记知识库",
    description: "把一本书蒸馏成可检索、可追溯、可累积的知识库",
    base: '/book-wiki/',
    ignoreDeadLinks: true,
    
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '首页', link: '/' },
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/hoochanlon/book-wiki' }
      ],

      search: {
        provider: 'local'
      },

      footer: {
        message: '基于 VitePress 构建',
        copyright: 'Copyright © 2026'
      },

      // 关闭文档底部的"最近更新"时间戳
      lastUpdated: false,

      // Teek：关闭文章页底部「最近更新」栏
      articleUpdate: {
        enabled: false,
      },

      // Teek：关闭右下角「滚动到评论区」按钮
      toComment: {
        enabled: false,
      },

      // Teek 主题配置
      homeCardListPosition: false, // 关闭首页右侧卡片栏
    },

    markdown: {
      lineNumbers: true
    },
    
    // Mermaid 配置（可选）
    mermaid: {
      // 主题配置
    }
  }),
  {
    documentRootPath: '/',
    scanStartPath: null,
    resolvePath: '/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    frontmatterTitleFieldName: 'title',
    useFolderTitleFromIndexFile: false,
    useFolderLinkFromIndexFile: false,
    hyphenToSpace: true,
    underscoreToSpace: true,
    excludeFiles: ['index.md', 'README.md'],
    excludeFolders: ['.vitepress', '.github', 'node_modules'],
    sortMenusByName: false,
    sortMenusByFrontmatterOrder: false,
    sortMenusOrderByDescending: false,
    collapsed: false,
    capitalizeFirst: false,
    capitalizeEachWords: false,
    rootGroupCollapsed: false,
  })
)
