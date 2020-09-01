import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://webdev-api.loftschool.com',
})

instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token') || ''

  config.headers = token ? {'Authorization': `Bearer ${token}`} : {}

  return config
})

instance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config
  if (error.response.status === 401) {
    const token = await axios.post('refreshToken', this.user)
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    return instance(originalRequest)
  }
  return Promise.reject(error)
})

export default instance
