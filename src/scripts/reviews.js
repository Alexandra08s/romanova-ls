import Vue from "vue"
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

new Vue({
  el: "#reviews-component",
  data() {
    return {
      reviews: null,
      sliderOptions: {
        slidesPerView: 2
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    requireImages(data) {
      return data.map(item => {
        const requiredImage = require(`../images/content/reviews/${item.img}`).default
        item.img = requiredImage

        return item
      })
    },
    slide(direction) {
      const slider = this.$refs.slider.$swiper
      direction == 1 ? slider.slideNext() : slider.slidePrev()
    }
  },
  created() {
    const data = require('../data/reviews.json')
    this.reviews = this.requireImages(data)
  },
  template: "#reviews-container"
})
