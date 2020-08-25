import labeledAvatar from '../../avatar.vue'
import { text, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'avatar/labeled',
  component: labeledAvatar,
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: { labeledAvatar },
  props: {
    size: {
      default: text('size', '47')
    },
    userName: {
      type: String,
      default: 'Владимир Астаханов'
    }
  },
  template: `
    <labeled-avatar type="labeled" :size="size" :user-name="userName" src="https://picsum.photos/300/300" />
  `,
})

defaultView.story = {
  name: 'С юзернеймом',
  parameters: {
    backgrounds: [
      { name: 'grey', value: '#8395a7', default: true },
    ],
  },
}
