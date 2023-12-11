import { Todo } from './../homeMeteo/Modules/imeteo';
import { Component } from '@angular/core';
import { MeteoService } from '../homeMeteo/meteo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  city!:string
  lang:string = 'it_IT'
  weatherData: any

  constructor(private meteoSvc:MeteoService){}

  favorites:Todo[] = [];

  ngOnInit(){}

  getWeather() {
    this.meteoSvc.getWeather(this.city, this.lang)
    .subscribe(data => {
      this.weatherData = data;
      console.log(data);
    })
  }

  aggiungi(){
    this.meteoSvc.getWeather(this.city, this.lang)
   .subscribe(data => {
    this.weatherData = data;
    console.log(data);
    this.favorites.push(this.weatherData);
    console.log(this.favorites);
  })
}
}
