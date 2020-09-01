import Vue from 'vue'
import Router from 'vue-router'
import AboutPage from './components/pages/about/about-page.vue'
import ExamplesPage from './components/pages/examples/examples-page.vue'
import ReviewsPage from './components/pages/reviews/reviews-page.vue'
import LoginPage from './components/pages/login/login-page.vue'
import headerBlock from './components/header-block/header-block.vue'

Vue.use(Router)

const router = new Router({
  base: 'admin',
  routes: [
    {
      path: '/',
      name: 'about',
      components: {
        default: AboutPage,
        header: headerBlock
      }
    },
    {
      path: '/examples',
      name: 'examples',
      components: {
        default: ExamplesPage,
        header: headerBlock
      }
    },
    {
      path: '/reviews',
      name: 'reviews',
      components: {
        default: ReviewsPage,
        header: headerBlock
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '*',
      redirect: '/about'
    }
  ]
})

export default router
