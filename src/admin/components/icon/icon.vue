<template>
  <button
    :class="['icon-component', iconClass, {'grayscale': grayscale}, {'interactive-btn': interactiveBtn}, {'no-words' : !!title === false}, {'blocked': blocked}]"
    :data-text="title"
    type="button"
    v-on="$listeners"
  ></button>
</template>

<script>
export default {
  props: {
    symbol: {
      type: String,
      default: 'pencil',
      validator: value => ['pencil', 'cross', 'tick', 'trash'].includes(value)
    },
    grayscale: {
      type: Boolean
    },
    interactiveBtn: {
      type: Boolean
    },
    title: {
      type: String,
      default: ''
    },
    blocked: {
      type: Boolean
    }
  },
  computed: {
    iconClass() {
      return `is-${this.symbol}`
    }
  }
}
</script>

<style lang="postcss" scoped src="./icon.pcss"></style>
