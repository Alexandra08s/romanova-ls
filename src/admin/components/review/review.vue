<template>
  <card>
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
      <a
        class="review__link"
        :href="review.link"
        target="_blank"
      > {{ review.link }} </a>
      <div class="review__btns">
        <icon
          class="review__btn-edit"
          symbol="pencil"
          title="Править"
          @click="$emit('edit-review', review)"
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
    }
  },
  data() {
    return {
    }
  },
  computed: {
    tags() {
      return this.review.techs.trim().split(',')
    },
    coverPhoto() {
      return `${config.BASE_URL}/${this.review.photo}`
    }
  },
  methods: {
  }
}
</script>

<style lang="pcss" src="./review.pcss" scoped>
</style>
