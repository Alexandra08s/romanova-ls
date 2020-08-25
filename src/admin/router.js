import Vue from 'vue'
import Router from 'vue-router'
import AboutPage from './components/pages/about/about-page.vue'
import ExamplesPage from './components/pages/examples/examples-page.vue'
import ReviewsPage from './components/pages/reviews/reviews-page.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '.',
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/examples',
      name: 'examples',
      component: ExamplesPage
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsPage
    },
    {
      path: '*',
      redirect: '/about'
    }
  ]
})

export default router
