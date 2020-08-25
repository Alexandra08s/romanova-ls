<template>
  <nav class="nav">
    <div class="container">
      <ul class="nav__list">
        <li
          v-for="(item, ind) in navList"
          :key="ind"
          class="nav__item"
        >
          <router-link 
            class="nav__link"
            active-class="active" 
            :to="{name: item.link}" 
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  components: {
  },
  props: {
    navList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="pcss" src="./app-nav.pcss" scoped>
</style>
