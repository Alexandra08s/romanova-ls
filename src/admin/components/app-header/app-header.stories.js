import AppHeader from './app-header.vue'

export default {
  title: 'app-header',
  components: {
    AppHeader
  }
}

export const defaultView = () => ({
  components: {
    AppHeader
  },
  template: `
    <app-header title="Панель администрирования">
      <p> Content </p>
    </app-header>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
