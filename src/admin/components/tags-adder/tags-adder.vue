<template>
  <div class="tags-adder">
    <app-input
      v-model="currentTags"
      title=""
      @input="$emit('change', currentTags)"
    />
    <ul class="tags-adder__list">
      <li
        v-for="(tag, index) in tagsArray"
        v-if="tag.trim()"
        :key="`${tag}${index}`"
        class="tags-adder__item"
      >
        <tag
          interactive
          :title="tag"
          @click="removeTag(tag)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import appInput from '../input/input.vue'
import tag from '../tag/tag.vue'

export default {
  components: {
    appInput,
    tag
  },
  model: {
    prop: 'tags',
    event: 'change'
  },
  props: {
    tags: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      currentTags: null
    }
  },
  computed: {
    tagsArray() {
      if (this.currentTags) {
        return this.currentTags.trim().split(',')
      } 
      return []
    }
  },
  watch: {
    tags: {
      handler(tags) {
        this.currentTags = tags
      }, 
      deep: true,
      immediate: true,
    }
  },
  methods: {
    removeTag(tag) {
      let tags = this.tagsArray
      let tagIndex = tags.indexOf(tag)

      if (tagIndex < 0) return

      tags.splice(tagIndex, 1)
      this.currentTags = tags.join(', ')

      this.$emit('change', this.currentTags)
    }
  }
}
</script>

<style lang="pcss" src="./tags-adder.pcss" scoped>
</style>
