import skillAddLine from './skill-add-line.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  addSkill: action('addSkill'),
}

export default {
  title: 'skill-add-line',
  components: {skillAddLine}
}

export const defaultView = () => ({
  components: { skillAddLine },
  props: {
    empty: {
      type: Boolean
    }
  },
  template: `
    <skill-add-line :disabled="empty" @add-skill="addSkill" />
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
