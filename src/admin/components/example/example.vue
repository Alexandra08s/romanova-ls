<template>
  <card simple :class="{'editing': isEditing}">
    <div class="example__top">
      <div class="example__img-wrapper">
        <img :src="coverPhoto" class="example__img">
      </div>
      <ul class="example__tags">
        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="example__tag"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
    <div class="example__block">
      <p class="example__title">
        {{ example.title }}
      </p>
      <p class="example__description">
        {{ example.description }}
      </p>
      <a
        class="example__link"
        :href="example.link"
        target="_blank"
      > {{ example.link }} </a>
      <div class="example__btns">
        <icon
          class="example__btn-edit"
          symbol="pencil"
          title="Править"
          @click="editHandler"
        />
        <icon
          symbol="cross"
          class="example__btn-delete"
          title="Удалить"
          @click="$emit('delete-example', example.id)"
        />
      </div>
    </div>
  </card>
</template>

<script>
import card from '../card/card.vue'
import icon from '../icon/icon.vue'
import config from '../../../../env.paths.json'

export default {
  components: {
    card,
    icon
  },
  props: {
    example : {
      type: Object,
      default: () => ({
        title: null,
        photo: {},
        link: null,
        description: null
      })
    },
    cancelEditing: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    tags() {
      return this.example.techs.trim().split(',')
    },
    coverPhoto() {
      return `${config.BASE_URL}/${this.example.photo}`
    }
  },
  watch: {
    isEditing: {
      handler(isEditing) {
        isEditing = !this.cancelEditing
      },
      immediate: true
    }
  },
  methods: {
    editHandler() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.isEditing = true
      this.$emit('edit-example', this.example)
    }
  }
}
</script>

<style lang="pcss" src="./example.pcss" scoped>
</style>
