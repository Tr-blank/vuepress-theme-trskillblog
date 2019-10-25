const path = require('path')

module.exports = {
  title: "vuepress-theme-trskillblog",
  description: 'Vuepress theme of Tiya\'s IT Blog',
  repo: 'https://tr-blank.github.io/vuepress-theme-trskillblog',
  dest: './dist',
  ga:'UA-62416681-1',
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer')
    ]
  },
  theme: path.resolve(__dirname, '../../lib'),
  themeConfig: {
    nav:[
      { text: 'HOME', link: '/' },
      { text: 'TAGS', link: '/tags/' },
      { text: '关于我', link: '/about/' },
    ]
  }
}