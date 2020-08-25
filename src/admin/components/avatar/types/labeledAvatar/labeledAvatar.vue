<template>
  <div class="l-avatar-component">
    <div class="l-avatar-wrapper" :style="measures">
      <img 
        class="l-avatar-image"
        v-bind="$attrs"
        alt="user picture"
      />
    </div>
    <p class="l-avatar-label">
      {{ userName }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: '47'
    },
    userName: {
      type: String,
      default: ''
    }
  },
  computed: {
    measures() {
      const size = Number(this.size)
      return {
        width: `${size}px`,
        height: `${size}px`,
      }
    }
  }
}
</script>
<style lang="postcss" scoped src="./labeledAvatar.pcss"></style>
