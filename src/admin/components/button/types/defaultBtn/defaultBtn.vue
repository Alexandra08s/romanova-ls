<template>
  <button
    v-if="typeAttr === 'button'"
    :class="['default-btn-container', 'btn-decorator', {disabled}, {plain}]"
    :disabled="disabled"
    :type="type"
    v-on="$listeners"
  >
    {{ title }}
  </button>

  <label v-else-if="typeAttr === 'file'" class="btn-file-container">
    <div :class="['btn-file-fake btn-decorator', {'no-paddings': noPaddings}, {plain}]">{{ title }}</div>
    <input
      class="btn-file-input"
      type="file"
      v-on="$listeners"
    />
  </label>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Отправить'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    noPaddings: Boolean,
    plain: Boolean,
    typeAttr: {
      type: String,
      default: 'button',
      validator: value => ['button', 'file'].includes(value)
    }
  }
}
</script>

<style lang="postcss" scoped src="./defaultBtn.pcss"></style>
