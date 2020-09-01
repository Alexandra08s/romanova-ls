<template>
  <div>
    <app-header title="Панель администрирования">
      <labeled-avatar :user-name="userName" :src="imgSrc" />
    </app-header>
    <app-nav :nav-list="navList" />
  </div>
</template>

<script>
import appHeader from '../app-header/app-header.vue'
import labeledAvatar from '../avatar/types/labeledAvatar/labeledAvatar.vue'
import appNav from '../app-nav/app-nav.vue'

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
      return require('../../../images/content/avatar.jpg').default
    }
  }
}
</script>

