import axios, { AxiosInstance } from 'axios'
// export const baseURL = 'http://10.10.10.47:8000'
// export const baseURL = 'https://aeb9-49-229-149-183.ap.ngrok.io'
export const baseURL = 'https://388b-161-200-191-82.ap.ngrok.io/'
const instance = axios.create({
  baseURL,
})

export default instance