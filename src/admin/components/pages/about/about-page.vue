<template>
  <section class="about">
    <div v-if="!!categories.length" class="container">
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
          <category
            empty
            @remove="emptyCategory = false"
            @create-category="createCategory"
          />
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          class="about__item"
        >
          <category
            :category="category"
            @remove-skill="removeSkill"
            @edit-skill="editSkill"
            @delete-category="deleteCategory(category.id)"
            @create-skill="createSkill($event, category.id)"
            @edit-category="editCategory($event, category.id)"
          />
        </li>
      </ul>
    </div>
    <div v-else class="container">
      <div class="about__loader">
      </div>
    </div>
  </section>
</template>

<script>
import iconedBtn from '../../button/types/iconedBtn/iconedBtn.vue'
import category from '../../category/category.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'About',
  components: {
    iconedBtn,
    category,
  },
  data() {
    return {
      emptyCategory: false
    }
  },
  computed: {
    ...mapState('categories', {
      categories: state => state.data
    })
  },
  created() {
    this.fetchCategoryAction()
  },
  methods: {
    ...mapActions({
      createCategoryAction: 'categories/create',
      fetchCategoryAction: 'categories/fetch',
      editCategoryAction: 'categories/edit',
      deleteCategoryAction: 'categories/delete',
      createSkillsAction: 'skills/create',
      removeSkillsAction: 'skills/remove',
      editSkillsAction: 'skills/edit',
      showTooltip: 'tooltip/show'
    }),
    async createSkill(skill, categoryId) {
      const newSkill = {
        ...skill,
        category: categoryId
      }
      try {
        await this.createSkillsAction(newSkill)
        skill.title = '',
        skill.percent = ''
        this.showTooltip({
          text: 'Навык успешно создан',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось создать навык',
          type: 'error'
        })
      }
    },
    async editSkill(editedSkill) {
      try {
        await this.editSkillsAction(editedSkill)
        editedSkill.editMode = false
        this.showTooltip({
          text: 'Навык успешно изменен',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось изменить навык',
          type: 'error'
        })
      }
    },
    async removeSkill(removedSkill) {
      try {
        await this.removeSkillsAction(removedSkill)
        this.showTooltip({
          text: 'Навык успешно удален',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось удалить навык',
          type: 'error'
        })
      }
    },
    async createCategory(title){
      try {
        await this.createCategoryAction(title)
        this.emptyCategory = false
        this.showTooltip({
          text: 'Категория успешно создана',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: error.message,
          type: 'error'
        })
      }
    },
    async editCategory(title, id) {
      const editedCategory = {
        title,
        id
      }
      try {
        await this.editCategoryAction(editedCategory)
        this.showTooltip({
          text: 'Категория успешно изменена',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось изменить категорию',
          type: 'error'
        })
      }
    },
    async deleteCategory(id) {
      try {
        await this.deleteCategoryAction(id)
        this.showTooltip({
          text: 'Категория успешно удалена',
          type: 'success'
        })
      } catch(error) {
        this.showTooltip({
          text: 'Не удалось удалить категорию',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style lang="pcss" src="./about-page.pcss" scoped>
</style>
