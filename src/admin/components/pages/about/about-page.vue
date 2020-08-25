<template>
  <section class="about">
    <div class="container">
      <div class="about__wrapper">
        <p class="page__title about__title">
          Блок «Обо мне»
        </p>
        <iconed-btn
          v-if="!emptyCategory"
          type="iconed"
          title="Добавить группу"
          @click="emptyCategory = true"
        />
      </div>
      <ul class="about__list">
        <li v-if="emptyCategory" class="about__item">
          <category empty @remove="emptyCategory = false" />
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          class="about__item"
        >
          <category
            :category="category"
            @remove-category="removeCategory"
            @edit-category="editCategory"
            @edit-category-name="editCategory"
            @add-skill="addSkill"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import iconedBtn from '../../button/types/iconedBtn/iconedBtn.vue'
import category from '../../category/category.vue'

export default {
  name: 'About',
  components: {
    iconedBtn,
    category,
  },
  data() {
    return {
      categories: [],
      emptyCategory: false
    }
  },
  created() {
    this.categories = require('../../../data/categories.json')
  },
  methods: {
    editCategory(editedCategory) {
      let editCategoryId = this.categories.indexOf(editedCategory)

      this.$set(this.categories, editCategoryId, editedCategory)
    },
    removeCategory(removedCategory) {
      let removedCategoryArrayId = this.categories.indexOf(removedCategory)

      this.$set(this.categories, removedCategoryArrayId, removedCategory)
    },
    addSkill(){

    }
  }
}
</script>

<style lang="pcss" src="./about-page.pcss" scoped>
</style>
