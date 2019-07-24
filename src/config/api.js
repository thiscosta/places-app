import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.10:6060/api/',
  timeout: 5000
})

export default api
