import { Component } from '@angular/core';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {
  city!:string
  weatherData: any

  constructor(private meteoSvc:MeteoService){}


  ngOnInit(){}

  getWeather() {
    this.meteoSvc.getWeather(this.city)
    .subscribe(data => {
      this.weatherData = data;
      console.log(data);

    })
  }

}
