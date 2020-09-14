import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import categories from './modules/categories/index.js'
import skills from './modules/skills/index.js'
import tooltip from './modules/tooltip/index.js'
import examples from './modules/examples/index.js'
import reviews from './modules/reviews/index.js'
import user from './modules/user/index.js'

export default new Vuex.Store({
  modules: {
    categories,
    skills,
    tooltip,
    examples,
    reviews,
    user
  }
})
