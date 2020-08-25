<template>
  <component 
    :is="type"
    v-bind="$attrs"
    v-on="$listeners"
  /> 
</template>

<script>
export default {
  components: {
    default: () => import('./types/defaultBtn'),
    square: () => import('./types/squareBtn'),
    iconed: () => import('./types/iconedBtn'),
    round: () => import('./types/roundBtn'),
    underlined: () => import('./types/underlinedBtn')
  },
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
