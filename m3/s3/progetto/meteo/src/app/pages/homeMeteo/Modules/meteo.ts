import { Todo } from "./imeteo"

export class Meteo implements Todo {
  constructor(
    public coord: {
      lon: number,
      lat: number,
    },
    public weather: {
      main: string,
      description: string,
    },
    public main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number,
      sea_level: number,
      grnd_level: number
    },
    public wind: {
      speed: number,
      deg: number,
      gust: number,
    },
    public clouds: {
      all: number
    },
    public sys: {
      type: number,
      id: number,
      country: string,
      sunrise: number,
      sunset: number
    },
    public timezone: {
      name: string
    }
   ){}
}
