<template>
  <div :class="['tag', {interactive: interactive}]">
    <span class="tag__title"> {{ title }} </span>
    <icon
      v-if="interactive"
      symbol="cross"
      class="remove"
      type="button"
      interactive-btn
      v-on="$listeners"
    ></icon>
  </div>
</template>

<script>
import icon from '../icon'

export default {
  components: {
    icon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    interactive: Boolean
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>
