import axios from 'axios'
const BASE = 'http://sva.talana.com:8000/api/'

const service = axios.create({ baseURL: BASE })

service.interceptors.request.use(
    config => {
      const contentType = config.data instanceof FormData ? 'multipart/form-data':'application/json'
      config.headers['Content-Type'] = contentType
      config.headers['X-Requested-With'] = 'XMLHttpRequest'
      return config
    },
    error => {
      console.log("API: ", error)
      return Promise.reject(error)
    }
  )

  export default service