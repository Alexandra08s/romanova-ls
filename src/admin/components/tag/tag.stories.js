import tag from './tag.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  removeTag: action('removeTag')
}
export default {
  title: 'tag',
  components: {tag}
}

export const defaultView = () => ({
  components: { tag },
  template: `
    <tag title="tag" @remove-tag="removeTag"/>
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

export const interactiveView = () => ({
  components: { tag },
  props: {
    interactive: {
      type: Boolean
    }
  },
  template: `
    <tag title="tag" interactive @remove-tag="removeTag"/>
  `,
  methods
})

interactiveView.story = {
  name: 'Интерактивный вид',
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
}
