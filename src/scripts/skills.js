import Vue from "vue";
// import { component } from "vue/types/umd";

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
      const dashOffset = getComputedStyle(circle).getPropertyValue("stroke-dashoffset").replace(/px/, '')
      const newDashOffset = dashOffset - dashOffset*this.skill.percent/100
  
      circle.style.dashOffset = newDashOffset
      debugger
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
