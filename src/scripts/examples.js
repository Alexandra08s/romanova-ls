import Vue from "vue"

const examplesImgMin = {
  props: {
    examples: {
      type: Array,
      required: true
    },
    currentExample: {
      type: Object,
      required: true
    }
  },
  template: "#examples-img-min"
}

const examplesControls = {
  template: "#examples-controls"
}

const examplesSlider = {
  props: {
    examples: {
      type: Array,
      required: true
    },
    currentExample: {
      type: Object,
      required: true
    }
  },
  components: {
    examplesImgMin,
    examplesControls
  },
  computed: {
    reversedExamples() {
      const examples = [...this.examples]
      return examples.slice(0, 3).reverse()
    }
  },
  template: "#examples-slider"
}

const examplesTags = {
  props: {
    currentExample: {
      type: Object,
      required: true
    }
  },
  template: "#examples-tags"
}

const examplesInfo = {
  props: {
    currentExample: {
      type: Object,
      required: true
    }
  },
  components: {
    examplesTags
  },
  template: "#examples-info"
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
      return this.examples[0]
    }
  },
  methods: {
    requireImages(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/examples/${item.img}`).default
        item.img = requiredImage

        return item
      })
    },
    changeArrayOrderForward(num) {
      for (let i = 0; i < num; i++) {
        this.examples[0].sliderMinId = 0
        this.examples.push(this.examples[0])
        this.examples.shift()
        this.setOrderMinId()
      }
    },
    setOrderMinId() {
      for (let i = 0; i < 3; i++) {
        this.examples[i].sliderMinId = i + 1
      }
    },
    slide(direction) {
      if (direction === 1)  {
        this.changeArrayOrderForward(1)
      } else {
        const lastExample = this.examples[this.examples.length - 1]
        this.examples.find(item => item.sliderMinId === 3).sliderMinId = 0
        this.examples.unshift(lastExample)
        this.examples.pop()
        this.setOrderMinId()
      }
    },
    slideTo(minId) {
      this.changeArrayOrderForward(minId - 1)
    }
  },
  created() {
    const data = require('../data/examples.json')
    this.examples = this.requireImages(data).map(item => ({
      ...item,
      sliderMinId: 0
    }))
    this.setOrderMinId()
  },
  template: '#examples-container'
})
