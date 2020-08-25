import editLine from './editLine.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  editCategoryName: action('editCategoryName'),
  removeSkill: action('removeSkill')
}

export default {
  title: 'editLine',
  component: editLine,
}

export const defaultView = () => ({
  components: { editLine },
  data() {
    return {
      title: 'Название'
    }
  },
  template: `
    <editLine
      @approve="onApprove"
      @remove="onRemove" 
      v-model="title"
    />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид',
}

export const blockedView = () => ({
  components: { editLine },
  props: {
    empty: {
      type: Boolean
    }
  },
  data() {
    return {
      currentCategory: {
        id: 0,
        name: 'Frontend',
        skills: []
      }
    }
  },
  template: `
    <editLine 
    @edit-category-name="editCategoryName"
    @remove="removeSkill"
    :default-edit-mode="empty"
    v-model="currentCategory.name"
    />
  `,
})

blockedView.story = {
  name: 'Заблокированный',
}
