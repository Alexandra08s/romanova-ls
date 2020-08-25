<template>
  <header class="a-header">
    <div class="container a-header__container">
      <div class="a-header__wrapper">
        <slot class="a-header__slot" />
        <p class="a-header__title">
          {{ headerTitle }}
        </p>
      </div>
      <underlined-btn :btn-title="btnTitle" />
    </div>
  </header>
</template>

<script>
import underlinedBtn from '../button/types/underlinedBtn/underlinedBtn.vue'

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
  }
}
</script>

<style lang="pcss" src="./app-header.pcss" scoped>
</style>
