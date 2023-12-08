export interface Todo {
    "coord": {
      "lon": number;
      "lat": number;
    },
    "weather": {
      "main": string;
      "description": string;
    },
    "main": {
      "temp": number;
      "feels_like": number;
      "temp_min": number;
      "temp_max": number;
      "pressure": number;
      "humidity": number;
      "sea_level": number;
      "grnd_level": number
    },
    "wind": {
      "speed": number;
      "deg": number;
      "gust": number;
    },
    "clouds": {
      "all": number;
    },
    "sys": {
      "type": number,
      "id": number,
      "country": string,
      "sunrise": number,
      "sunset": number
    },
    "timezone":{
      "name": string;
    }
  }
