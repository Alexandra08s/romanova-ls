import Vue from "vue"
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

new Vue({
  el: "#reviews-component",
  data() {
    return {
      reviews: null,
      sliderOptions: {
        loop: true,
        slidesPerView: 2,
        loopedSlides: 1,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 55
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60
          },
          1200: {
            spaceBetween: 0
          }
        }
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
