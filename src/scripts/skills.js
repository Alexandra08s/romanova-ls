import Vue from "vue"

const skillsProgress = {
  props: { 
    skill: {
      type: Object,
      required: true
    }
  },
  methods: {
    drawPercentageCircle() {
      const circle = this.$refs["circle-progress"]
      const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dashoffset"), 10)
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
  created() {
    this.skills = require('../data/skills.json')
  },
  template: '#skills-block'
})
