import Vue from 'vue'
import axios from 'axios'
import config from '../../env.paths.json'

axios.defaults.baseURL = config.BASE_URL

const skillsProgress = {
  props: { 
    skill: {
      type: Object,
      required: true
    }
  },
  methods: {
    drawPercentageCircle() {
      const circle = this.$refs['circle-progress']
      const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue('stroke-dashoffset'), 10)
      const newDashOffset = dashOffset - dashOffset * this.skill.percent / 100
  
      circle.style.strokeDashoffset = newDashOffset
    }
  },
  mounted() {
    this.drawPercentageCircle()
  },
  template: '#skills-progress',
}

const skillsChart = {
  components: {
    skillsProgress
  },
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  template: '#skills-chart'
}

new Vue({
  el: '#skills-component',
  components: {
    skillsChart
  },
  data() {
    return {
      skills: []
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

    const { data } = await axios.get(`/categories/${localStorage.getItem('userId')}`)
    this.skills = data
  },
  template: '#skills-block'
})
