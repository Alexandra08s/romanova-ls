<template>
  <div>
    <router-view name="header" />
    <div class="app__content">
      <router-view />
    </div>
    <div :class="['notification__container', {'active': isTooltipShown}]">
      <notification
        class="notification"
        :text="tooltipText"
        :type="tooltipType"
        @click="hideTooltip"
      />
    </div>
  </div>
</template>

<script>
import notification from './components/notification/notification.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    notification
  },
  computed: {
    ...mapState('tooltip', {
      isTooltipShown: state => state.isShown,
      tooltipText: state => state.text,
      tooltipType: state => state.type
    })
  },
  methods: {
    ...mapActions({
      hideTooltip: 'tooltip/hide'
    })
  }
}
</script>

<style lang="pcss" src="./app.pcss">
</style>
