import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  apiKey = environment.apiKey


  constructor(private http:HttpClient) { }

  getWeather(citta:string,lang:string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${citta}&${lang}&appid=${this.apiKey}&units=metric`)
  }

  

}
