<template>
  <card>
    <edit-line
      slot="title"
      v-model="currentCategory.category"
      :default-edit-mode="empty"
      @create-category="$emit('create-category', $event)"
      @edit-category="$emit('edit-category', $event)"
      @change-edit-mode="changeEditMode"
      @delete-category="$emit('delete-category', $event)"
      @empty-category-handler="$emit('remove', $event)"
    />
    <template slot="content"> 
      <ul v-if="!empty" class="skills__list">
        <li
          v-for="skill in currentCategory.skills"
          :key="skill.id"
          class="skills__item"
        >
          <skill-item
            :skill="skill"
            @create-skill="$emit('create-skill', $event)"
            @remove-skill="$emit('remove-skill', $event)"
            @edit-skill="$emit('edit-skill', $event)"
          />
        </li>
      </ul>
      <div class="skill__addition">
        <skill-add-line :disabled="disabled && empty" @create-skill="$emit('create-skill', $event)" />
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
        category: null,
        skills: []
      })
    }
  },
  data() {
    return {
      currentCategory: {...this.category},
      disabled: true
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
    changeEditMode(editmode) {
      this.disabled = editmode
    }
  }
}
</script>

<style lang="pcss" src="./category.pcss" scoped>
</style>
