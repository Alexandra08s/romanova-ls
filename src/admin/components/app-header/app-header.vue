<template>
  <header class="a-header">
    <div class="container a-header__container">
      <div class="a-header__wrapper">
        <slot class="a-header__slot" />
        <p class="a-header__title">
          {{ headerTitle }}
        </p>
      </div>
      <underlined-btn :btn-title="btnTitle" @click="logout" />
    </div>
  </header>
</template>

<script>
import underlinedBtn from '../button/types/underlinedBtn/underlinedBtn.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    underlinedBtn
  },
  props: {
    headerTitle: {
      type: String,
      default: 'Панель администрирования'
    },
    btnTitle: {
      type: String,
      default: 'Выйти'
    }
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    })
  }
}
</script>

<style lang="pcss" src="./app-header.pcss" scoped>
</style>
