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
      examples: null,
      currentIndex: 0
    }
  },
  computed: {
    currentExample() {
      return this.examples[0]
    }
  },
  watch: {
    currentIndex(val) {
      this.makeInfiniteLoop(val)
    }
  },
  methods: {
    makeInfiniteLoop(ind) {
      const examplesLastInd = this.examples.length - 1
      if (ind < 0) {
        this.currentIndex = examplesLastInd
      }
      if (ind > examplesLastInd) {
        this.currentIndex = 0
      } 
    },
    requireImages(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/examples/${item.img}`).default
        item.img = requiredImage

        return item
      })
    },
    slide(direction) {
      const lastExample = this.examples[this.examples.length - 1]
      if (direction == 1)  {
        this.examples.push(this.examples[0])
        this.examples.shift()
      } else {
        this.examples.unshift(lastExample)
        this.examples.pop()
      }
      this.currentIndex = this.currentIndex + direction
    },
  },
  created() {
    const data = require('../data/examples.json')
    this.examples = this.requireImages(data)
  },
  template: '#examples-container'
})
