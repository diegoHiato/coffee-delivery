import axios from 'axios'

export const geocodingApi = axios.create({
  baseURL: 'https://geocode.maps.co',
})
