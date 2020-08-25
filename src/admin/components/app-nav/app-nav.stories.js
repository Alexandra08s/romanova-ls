import appNav from './app-nav.vue'

export default {
  title: 'app-nav',
  components: {appNav}
}

export const defaultView = () => ({
  components: { appNav },
  props: {
    navList: {
      default: [
        { name: 'Обо мне', link: 'about' },
        { name: 'Работы', link: 'examples' },
        { name: 'Отзывы', link: 'reviews' }
      ]
    }
  },
  template: `
    <app-nav :navList="navList" />
  `
})

defaultView.story = {
  name: 'Стандартный вид',
}
