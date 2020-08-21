import axios from 'axios'
const api = axios.create({
  method: 'get',
  baseURL: 'http://64.227.7.93/api/v1/',
  timeout: 40000,
  withCredentials: false,
  responseType: 'json',
  maxContentLength: 2000000,
  maxRedirects: 3
})

// CUSTOMER ME
export const getRoutesApi = async () => {
    return await api.get('bus/route')
  }

