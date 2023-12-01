import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  Url:string = "http://localhost:3000/lista";

  creazione(){

  }

  getAll(){
    return fetch(this.Url)
    .then(res => res.json())
  }
}
