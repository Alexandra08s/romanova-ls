import Vue from "vue";

const examplesSliderImg = {

}

new Vue({
  el: '#examples-slider-component',
  components: {
    examplesSliderImg,
    examplesSliderInfo
  },
  data() {
    return {
      examples: []
    }
  },
  created() {
    this.examples = require('../data/examples.json')
  },
  template: '#examples-slider'
})
