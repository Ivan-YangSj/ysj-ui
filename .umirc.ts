import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@ysjdemo/ysj-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '组件',
        path: '/components',
        children: [
          // 菜单子项（可选）
          'components/Foo/index.md',
          'components/MyButton/index.md',
        ],
      },
    ],
  },
});
