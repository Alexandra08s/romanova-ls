import underlinedBtn from '../../button.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onClick: action('onClick')
}

export default {
  title: 'button/underlined',
  component: underlinedBtn
}

export const defaultView = () => ({
  components: { underlinedBtn },
  template: `
    <underlined-btn type="underlined" tnTitle="" @click="onClick" />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид',
}
