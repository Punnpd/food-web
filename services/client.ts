import axios, { AxiosInstance } from 'axios'
// export const baseURL = 'http://10.10.10.47:8000'
// export const baseURL = 'https://aeb9-49-229-149-183.ap.ngrok.io'
export const baseURL = 'http://food-app:8000/'
const instance = axios.create({
  baseURL,
})

export default instance