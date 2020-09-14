import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import axios from 'axios'

Vue.use(Router)

const router = new Router({
  base: 'admin',
  routes: [
    {
      path: '/',
      name: 'about',
      components: {
        default: () => import('./components/pages/about/about-page.vue'),
        header: () => import('./components/header-block/header-block.vue')
      }
    },
    {
      path: '/examples',
      name: 'examples',
      components: {
        default: () => import('./components/pages/examples/examples-page.vue'),
        header: () => import('./components/header-block/header-block.vue')
      }
    },
    {
      path: '/reviews',
      name: 'reviews',
      components: {
        default: () => import('./components/pages/reviews/reviews-page.vue'),
        header: () => import('./components/header-block/header-block.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/pages/login/login-page.vue'),
      meta: {
        public: true
      }
    },
    {
      path: '*',
      redirect: '/about'
    }
  ]
})

const guard = axios.create({
  baseURL: 'https://webdev-api.loftschool.com/'
})

guard.interceptors.response.use(response => response, 
  async function (error) {
    if (error.response.status === 401) {
      const originalRequest = error.config
      try {
        axios.defaults.baseURL = 'https://webdev-api.loftschool.com/'
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        const response = await axios.post('/refreshToken')
        localStorage.setItem('token', response.data.token)
        originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`
      } catch(error) {
        console.log(error)
      }

      return guard(originalRequest)
    }
    return Promise.reject(error)
  })

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(route => route.meta.public)
  const isUserLoggedIn = store.getters['user/userIsloggedIn']

  if (!isPublicRoute && !isUserLoggedIn) {
    const token = localStorage.getItem('token', token)
    guard.defaults.headers['Authorization'] = `Bearer ${token}`
    try {
      const response = await guard.get('/user')
      store.dispatch('user/login', await response.data.user)
      next()
    } catch(error) {
      router.replace('/login')
      localStorage.removeItem('token')
    }
  } else {
    next()
  }
})

export default router
