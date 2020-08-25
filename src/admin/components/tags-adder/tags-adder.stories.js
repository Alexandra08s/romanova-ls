import tagsAdder from './tags-adder.vue'

export default {
  title: 'tags-adder',
  components: {
    tagsAdder
  }
}

export const defaultView = () => ({
  components: {
    tagsAdder
  },
  data() {
    return {
      tags: 'One, two, three, four'
    }
  },
  template: `
    <tags-adder v-model="tags" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
