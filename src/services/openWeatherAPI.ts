import axios from 'axios'
import { openWeatherApiKey } from '../../envrionmentVariables.ts'

export const openWeatherAPI = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0',
  params: {
    appid: `${openWeatherApiKey}`,
  },
})
