<template>
  <card>
    <edit-line
      slot="title"
      v-model="currentCategory.name"
      :default-edit-mode="empty"
      @edit-category-name="editCategoryName"
      @remove="removeSkill"
    />
    <template slot="content"> 
      <ul v-if="!empty" class="skills__list">
        <li
          v-for="(skill, index) in currentCategory.skills"
          :key="skill.id"
          class="skills__item"
        >
          <skill-item
            :skill="skill"
            @remove-skill="removeSkill"
            @edit-skill="$emit('edit-category', {
              ...currentCategory,
              skills: currentCategory.skills.map((item, idx) => idx === index ? $event : item)
            }
            )"
          />
        </li>
      </ul>
      <div class="skill__addition">
        <skill-add-line :disabled="empty" @add-skill="$emit('add-skill', $event)" />
      </div>
    </template>
  </card>
</template>

<script>
import card from '../card/card.vue'
import editLine from '../editLine/editLine.vue'
import skillItem from '../skill-item/skill-item.vue'
import skillAddLine from '../skill-add-line/skill-add-line.vue'

export default {
  components: {
    card,
    editLine,
    skillItem,
    skillAddLine
  },
  props: {
    empty: {
      type: Boolean,
      default: false
    },
    category : {
      type: Object,
      default: () => ({
        id: null,
        name: null,
        skills: []
      })
    }
  },
  data() {
    return {
      currentCategory: {...this.category}
    }
  },
  watch: {
    category: {
      handler(category) {
        this.currentCategory = category
      }, 
      deep: true
    }
  },
  methods: {
    removeSkill(removedSkillId) {
      this.currentCategory.skills = this.currentCategory.skills.filter(item => item.id !== removedSkillId)
      this.$emit('remove-category', this.currentCategory)
    },
    editCategoryName(newCategoryName) {
      this.currentCategory.name = newCategoryName
      this.$emit('edit-category-name', this.currentCategory)
    }
  }
}
</script>

<style lang="pcss" src="./category.pcss" scoped>
</style>
