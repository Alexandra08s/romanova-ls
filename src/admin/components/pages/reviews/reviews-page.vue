<template>
  <section class="reviews">
    <div class="container">
      <p class="page__title reviews__title">
        Блок «Отзывы»
      </p>
      <review-form
        v-if="reviewForm"
        class="review-form__comp"
        :is-editing="isEditing"
        :review="editedReview"
        @cancel="reviewForm = false"
        @add-review="addReview"
        @edit-review="editReview"
      />
      <ul class="review__list">
        <li class="review__item">
          <square-btn 
            type="square"
            title="Добавить отзыв" 
            :disabled="reviewForm"
            @click="reviewFormHandler"
          />
        </li>
        <li
          v-for="review in reviews"
          :key="review.id"
          class="review__item"
        >
          <review
            :review="review"
            :cancel-editing="isEditing"
            @edit-review="editReviewHandler"
            @delete-review="deleteReview"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import squareBtn from '../../button/button.vue'
import review from '../../review/review.vue'
import reviewForm from '../../review-form/review-form.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Reviews',
  components: {
    squareBtn,
    review,
    reviewForm
  },
  data() {
    return {
      reviewForm: false,
      isEditing: false,
      editedReview: {
        id: null,
        photo: null,
        author: null,
        occ: null,
        text: null,
        preview: null
      }
    }
  },
  computed: {
    ...mapState('reviews', {
      reviews: state => state.data
    })
  },
  created() {
    this.fetchReviewsAction()
  },
  methods: {
    ...mapActions({
      addReviewAction: 'reviews/add',
      fetchReviewsAction: 'reviews/fetch',
      editReviewAction: 'reviews/edit',
      deleteReviewAction: 'reviews/delete',
      showTooltip: 'tooltip/show'
    }),
    async addReview(newReview){
      try {
        await this.addReviewAction(newReview)
        this.reviewForm = false
        this.showTooltip({
          text: 'Отзыв успешно создан',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: error.message,
          type: 'error'
        })
      }
    },
    editReviewHandler(review) {
      this.reviewForm = true
      this.isEditing = true
      this.editedReview = review
      this.editedReview.preview = null
    },
    async editReview(editedReview) {
      try {
        await this.editReviewAction(editedReview)
        this.reviewForm = false
        this.showTooltip({
          text: 'Отзыв успешно изменен',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось изменить отзыв',
          type: 'error'
        })
      }
    },
    async deleteReview(id) {
      try {
        await this.deleteReviewAction(id)
        this.showTooltip({
          text: 'Отзыв успешно удален',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось удалить отзыв',
          type: 'error'
        })
      }
    },
    reviewFormHandler() {
      this.reviewForm = true
      this.editedReview = {
        id: null,
        title: '',
        link: '',
        description: '',
        techs: '',
        photo: {},
        preview: ''
      }
    }
  }
}
</script>

<style lang="pcss" src="./reviews-page.pcss" scoped>
</style>
