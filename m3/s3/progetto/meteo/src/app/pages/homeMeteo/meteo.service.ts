import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  apiKey = environment.apiKey


  constructor(private http:HttpClient) { }

  getWeather(city:string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=it&appid=${this.apiKey}&units=metric`)
  }

}
