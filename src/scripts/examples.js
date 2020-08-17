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
    slicedExamples() {
      const examples = [...this.examples].slice(1,4)
      console.log(examples)
      return examples
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
      return this.examples[this.examples.length - 1]
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
      if (direction === 'next' )  {
        this.changeArrayOrderForward(1)
      } 
      else if (direction === 'prev'|| direction === 1){
        this.changeArrayOrderBack(1)
      } else {
        if (direction === 0) {
          this.changeArrayOrderForward(2)
        }
      } 
    }
  },
  created() {
    const data = require('../data/examples.json')
    this.examples = this.requireImages(data).reverse()
  },
  template: '#examples-container'
})
