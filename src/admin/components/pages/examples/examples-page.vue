<template>
  <section class="examples">
    <div class="container">
      <p class="page__title">
        Блок «Работы»
      </p>
      <tags-adder :tags="tags" />
    </div>
  </section>
</template>

<script>
import tagsAdder from '../../tags-adder/tags-adder.vue'

export default {
  name: 'Examples',
  components: {
    tagsAdder
  },
  data() {
    return {
      tags: 'One, two, three, four'
    }
  }
}
</script>

<style lang="pcss" src="./examples-page.pcss" scoped>
</style>
