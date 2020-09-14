import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://webdev-api.loftschool.com',
})

instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token') || ''
  const baseHeaders = {'Content-Type': 'application/json'}
  if (token) baseHeaders.Authorization = `Bearer ${token}`
  config.headers = baseHeaders

  return config
})

instance.interceptors.response.use(response => response, 
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

      return instance(originalRequest)
    }
    return Promise.reject(error)
  })

export default instance
