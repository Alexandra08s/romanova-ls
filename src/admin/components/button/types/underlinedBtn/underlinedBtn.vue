<template>
  <button
    :class="['btn-underlined', {disabled}]"
    :disabled="disabled"
    v-on="$listeners"
  >
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  props: {
    btnTitle: {
      type: String,
      default: 'Отправить'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped src="./underlinedBtn.pcss"></style>
