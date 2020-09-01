<template>
  <section class="reviews">
    <div class="container">
      <p class="page__title">
        Блок «Отзывы»
      </p>
      <ul class="reviews__list">
        <li v-if="emptyReviews" class="reviews__item">
          <review
            empty
          />
        </li>
        <li
          v-for="review in reviews"
          :key="review.id"
          class="reviews__item"
        >
          <review
            :review="review"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// import iconedBtn from "../button/types/iconedBtn/iconedBtn.vue"

export default {
  name: 'Reviews',
  components: {
  }
}
</script>

<style lang="pcss" src="./reviews-page.pcss" scoped>
</style>
