import Vue from 'vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import axios from 'axios'
import config from '../../env.paths.json'

axios.defaults.baseURL = config.BASE_URL

new Vue({
  el: '#reviews-component',
  components: {
    Swiper,
    SwiperSlide
  },
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
  async created() {
    try {
      axios.get('/user').then(response => {
        localStorage.setItem('userId', response.data.user.id)
      })
    } catch(error) {
      console.log(error.response.data.error)
    }

    const { data } = await axios.get(`/reviews/${localStorage.getItem('userId')}`)
    this.reviews = this.requireImages(data)
  },
  mounted() {
    this.btnDisabledHandler()
  },
  methods: {
    requireImages(data) {
      return data.map(item => {
        item.photo = `${config.BASE_URL}/${item.photo}`

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
  template: '#reviews-container'
})
