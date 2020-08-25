<template>
  <div>
    <app-header title="Панель администрирования">
      <labeled-avatar :user-name="userName" :src="imgSrc" />
    </app-header>
    <app-nav :nav-list="navList" />
    <div class="app__content">
      <router-view />
    </div>
  </div>
</template>

<script>
import appHeader from './components/app-header/app-header.vue'
import labeledAvatar from './components/avatar/types/labeledAvatar/labeledAvatar.vue'
import appNav from './components/app-nav/app-nav.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    labeledAvatar,
    appNav
  },
  data() {
    return {
      userName: 'Владимир Астаханов',
      navList: [
        { name: 'Обо мне', link: 'about' },
        { name: 'Работы', link: 'examples' },
        { name: 'Отзывы', link: 'reviews' }
      ]
    }
  },
  computed: {
    imgSrc() {
      return require('../images/content/avatar.jpg').default
    }
  }
}
</script>

<style lang="pcss" src="./app.pcss">
</style>

<style lang="pcss" scoped>
  .app__content {
    margin-top: 4px;
  }
</style>
