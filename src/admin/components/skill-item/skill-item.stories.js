import skillItem from './skill-item.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  removeSkill: action('removeSkill'),
  editSkill: action('editSkill'),
}

export default {
  title: 'skill-item',
  components: {skillItem}
}

export const defaultView = () => ({
  components: { skillItem },
  data() {
    return {
      skill: {
        id: 0,
        title: 'someTitle',
        percent: 55
      }
    }
  },
  template: `
    <skill-item 
      :skill='skill' 
      @remove-skill="removeSkill"
      @edit-skill="editSkill"
    />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид',
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
}
