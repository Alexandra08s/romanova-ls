<template>
  <card>
    <p v-if="!isEditing" slot="title">
      Новый отзыв
    </p>
    <p
      v-else
      slot="title"
      class="review-form__title"
    >
      Редактирование отзыва
    </p>
    <template slot="content">
      <validation-observer
        ref="review-form"
        class="review-form"
        tag="div"
      >
        <add-photo
          class="review-form__add"
          :avatar="currentReview.preview"
          @add-photo="addPhoto"
          @render-photo="renderPhoto"
        />
        <div class="review-form__wrapper">
          <div class="review-form__author">
            <div class="review-form__author-name">
              <label class="review-form__label" for="author">Имя автора</label>
              <ValidationProvider v-slot="{ errors }" rules="required">
                <app-input
                  id="author"
                  v-model="currentReview.author"
                  class="review-form__input"
                  :error-message="errors[0] ? 'Не введено имя автора' : ''"
                />
              </ValidationProvider>
            </div>
            <div class="review-form__author-occ">
              <label class="review-form__label" for="occ">Титул автора</label>
              <ValidationProvider v-slot="{ errors }" rules="required">
                <app-input
                  id="occ"
                  v-model="currentReview.occ"
                  class="review-form__input"
                  :error-message="errors[0] ? 'Не введен титул автора' : ''"
                />
              </ValidationProvider>
            </div>
          </div>
          <label class="review-form__label" for="text">Отзыв</label>
          <app-input
            id="text"
            v-model="currentReview.text"
            field-type="textarea"
            class="review-form__input review-form__input--text"
          />
          <div class="review-form__btns">
            <app-button
              title="Отмена"
              plain
              @click="$emit('cancel')"
            />
            <app-button
              title="Сохранить"
              :style="{paddingBottom: 0, paddingTop: 0}"
              class="review-form__btn"
              @click="submitHandler"
            />
          </div>
        </div>
      </validation-observer>
    </template>
  </card>
</template>

<script>
import card from '../card/card.vue'
import addPhoto from '../add-photo/add-photo.vue'
import appInput from '../input/input.vue'
import appButton from '../button/button.vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import config from '../../../../env.paths.json'

extend('required', required)

export default {
  components: {
    card,
    addPhoto,
    appInput,
    appButton,
    ValidationProvider,
    ValidationObserver
  },
  props: {
    empty: {
      type: Boolean,
      default: false
    },
    review : {
      type: Object,
      default: () => ({
        id: null,
        title: '',
        link: '',
        description: '',
        techs: '',
        photo: {},
        preview: ''
      })
    },
    isEditing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentReview: {...this.review}
    }
  },
  watch: {
    review: {
      handler(review) {
        this.currentReview = {...review}
      }, 
      deep: true
    },
    isEditing: {
      handler(isEditing) {
        if (isEditing) {
          this.currentReview.preview = `${config.BASE_URL}/${this.review.photo}`
        }
      },
      immediate: true
    }
  },
  methods: {
    addPhoto(photo) {
      this.currentReview.photo = photo
    },
    renderPhoto(preview) {
      this.currentReview.preview = preview
    },
    submitHandler() {
      this.$refs['review-form'].validate().then(isValid => {
        if (isValid) {
          let newReview = {...this.currentReview}
          delete newReview.preview
          this.isEditing ? this.$emit('edit-review', newReview) : this.$emit('add-review', newReview)
        }
      })
    }
  }
}
</script>

<style lang="pcss" src="./review-form.pcss" scoped>
</style>
