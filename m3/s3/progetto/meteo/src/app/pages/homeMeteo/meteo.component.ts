import { Component } from '@angular/core';
import { MeteoService } from './meteo.service';
import { Todo } from './Modules/imeteo';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {
  city!:string
  lang:string = 'it_IT'
  weatherData: any

  constructor(private meteoSvc:MeteoService){}

  product:Todo[] = [];

  ngOnInit(){}

  getWeather() {
    this.meteoSvc.getWeather(this.city, this.lang)
    .subscribe(data => {
      this.weatherData = data;
      console.log(data);
    })
  }

}
