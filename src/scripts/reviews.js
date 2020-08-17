import Vue from "vue"
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

new Vue({
  el: "#reviews-component",
  data() {
    return {
      reviews: [],
      slider: null,
      isDisabledNext: false,
      isDisabledPrev: false,
      sliderOptions: {
        slidesPerView: 2,
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
    btnDisabledHandler() {
      this.slider = this.$refs.slider.$swiper
      if (this.slider.isBeginning === true) {
        this.isDisabledPrev = true
        this.isDisabledNext = false
      } 
      else if (this.slider.isEnd === true) {
        this.isDisabledPrev = false
        this.isDisabledNext = true
      } else {
        this.isDisabledPrev = false
        this.isDisabledNext = false
      }
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
  mounted() {
    this.btnDisabledHandler()
  },
  template: "#reviews-container"
})
