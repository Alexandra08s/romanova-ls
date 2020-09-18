<template>
  <card :class="{'editing': isEditing}">
    <div slot="title" class="review__top">
      <div class="review__img-wrapper">
        <img :src="coverPhoto" class="review__img">
      </div>
      <div class="review__author-wrapper">
        <p class="review__author">
          {{ review.author }}
        </p>
        <p class="review__occ">
          {{ review.occ }}
        </p>
      </div>
    </div>
    <div slot="content" class="review__block">
      <p class="review__text">
        {{ review.text }}
      </p>
      <div class="review__btns">
        <icon
          class="review__btn-edit"
          symbol="pencil"
          title="Править"
          @click="editHandler"
        />
        <icon
          symbol="cross"
          class="review__btn-delete"
          title="Удалить"
          @click="$emit('delete-review', review.id)"
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
    review : {
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
      isEditing: false
    }
  },
  computed: {
    coverPhoto() {
      return `${config.BASE_URL}/${this.review.photo}`
    }
  },
  methods: {
    editHandler() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.isEditing = true
      this.$emit('edit-review', this.review)
    }
  }
}
</script>

<style lang="pcss" src="./review.pcss" scoped>
</style>
