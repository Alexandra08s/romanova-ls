<template>
  <div v-if="simple" class="card-component card_plain">
    <slot name="default"></slot>
  </div>
  <div v-else class="card-component">
    <div class="header">
      <div class="text" v-text="title"></div>
      <slot v-if="!!title === false" name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '' 
    },
    simple: Boolean
  }
}
</script>


<style lang="postcss" src="./card.pcss" scoped>
</style>

