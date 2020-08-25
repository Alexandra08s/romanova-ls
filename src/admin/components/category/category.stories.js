import category from './category.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  removeCategory: action('removeCategory'),
  editCategory: action('editCategory'),
  addSkill: action('addSkill'),
}

export default {
  title: 'category',
  components: {category}
}

const skills = [
  {
    id: 0,
    title: 'CSS',
    percent: 50
  },
  {
    id: 1,
    title: 'HTML',
    percent: 20
  },
]

export const defaultView = () => ({
  components: { category },
  data() {
    return {
      title: 'Frontend',
      skills
    }
  },
  template: `
    <category 
      :title="title" 
      :skills="skills" 
      @remove-category="removeCategory"
      @edit-category="editCategory"
      @edit-category-name="editCategory"
      @add-skill="addSkill"
    />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}
