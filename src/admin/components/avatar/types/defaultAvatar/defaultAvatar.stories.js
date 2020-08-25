import defaultAvatar from '../../avatar.vue'
import {
  text,
  withKnobs
} from '@storybook/addon-knobs'

export default {
  title: 'avatar/default',
  components: {
    defaultAvatar
  },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    defaultAvatar
  },
  props: {
    size: {
      default: text('size', '47')
    }
  },
  template: `
    <default-avatar :size="size" src="https://picsum.photos/300/300" />
  `,
})

defaultView.story = {
  name: 'Стандартный вид'
}
