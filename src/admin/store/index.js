import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import categories from './modules/categories/index.js'
import skills from './modules/skills/index.js'
import tooltip from './modules/tooltip/index.js'

export default new Vuex.Store({
  modules: {
    categories,
    skills,
    tooltip
  }
})
