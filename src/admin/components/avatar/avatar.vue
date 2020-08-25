<template>
  <component 
    :is="type"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  components: {
    default: () => import('./types/defaultAvatar'),
    labeled: () => import('./types/labeledAvatar')
  },
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
