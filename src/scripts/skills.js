import Vue from "vue";
// import { component } from "vue/types/umd";

const skillsProgress = {
  template: '#skills-progress'
}

const skillsChart = {
  template: '#skills-chart',
  components: {
    skillsProgress
  }
}

new Vue({
  el: '#skills-component',
  template: '#skills-block',
  components: {
    skillsChart
  }
})
