import Vue from 'vue'
import axios from 'axios'
import config from '../../env.paths.json'

axios.defaults.baseURL = config.BASE_URL

const examplesImgMin = {
  props: {
    examples: {
      type: Array,
      required: true
    },
    currentExample: {
      type: Object,
      required: true,
      default: () => ({
        description: null,
        link: null,
        photo: null,
        techs: null,
        title: null,
        pageId: null
      })
    }
  },
  template: '#examples-img-min'
}

const examplesControls = {
  template: '#examples-controls'
}

const examplesSlider = {
  props: {
    examples: {
      type: Array,
      required: true
    },
    currentExample: {
      type: Object,
      required: true,
      default: () => ({
        description: null,
        link: null,
        photo: null,
        techs: null,
        title: null,
        pageId: null
      })
    }
  },
  components: {
    examplesImgMin,
    examplesControls
  },
  computed: {
    slicedExamples() {
      let examples = []
      this.examples.length > 4 ? examples = [...this.examples].slice(1, 4) : examples = [...this.examples]
      return examples
    }
  },
  template: '#examples-slider'
}

const examplesTags = {
  props: {
    currentExample: {
      type: Object,
      required: true,
      default: () => ({
        description: null,
        link: null,
        photo: null,
        techs: null,
        title: null,
        pageId: null
      })
    }
  },
  template: '#examples-tags'
}

const examplesInfo = {
  props: {
    currentExample: {
      type: Object,
      required: true,
      default: () => ({
        description: null,
        link: null,
        photo: null,
        techs: null,
        title: null,
        pageId: null
      })
    }
  },
  components: {
    examplesTags
  },
  template: '#examples-info'
}

new Vue({
  el: '#examples-component',
  components: {
    examplesSlider,
    examplesInfo
  },
  data() {
    return {
      examples: []
    }
  },
  computed: {
    currentExample() {
      return this.examples[this.examples.length - 1]
    }
  },
  async created() {
    try {
      axios.get('/user').then(response => {
        localStorage.setItem('userId', response.data.user.id)
      })
    } catch(error) {
      console.log(error.response.data.error)
    }

    const { data } = await axios.get(`/works/${localStorage.getItem('userId')}`)
    this.examples = this.requireImages(data)
    for (let i = 0; i < this.examples.length; i++) {
      this.examples[i].pageId = i + 1
      this.examples[i].techs = this.examples[i].techs.split(',')
    }
    this.examples = this.examples.reverse()
  },
  methods: {
    requireImages(data) {
      return data.map(item => {
        item.photo = `${config.BASE_URL}/${item.photo}`

        return item
      })
    },
    changeArrayOrderForward(num) {
      for (let i = 0; i < num; i++) {
        this.examples.push(this.examples[0])
        this.examples.shift()
      }
    },
    changeArrayOrderBack(num) {
      const lastExample = this.examples[this.examples.length - 1]
      for (let i = 0; i < num; i++) {
        this.examples.unshift(lastExample)
        this.examples.pop()
      }
    },
    slide(direction) {
      if (direction === 'next') {
        this.changeArrayOrderForward(1)
      } else if (direction === 'prev' || direction === 1) {
        this.changeArrayOrderBack(1)
      } else {
        if (direction === 0) {
          this.changeArrayOrderForward(2)
        }
      }
    }
  },
  template: '#examples-container'
})
