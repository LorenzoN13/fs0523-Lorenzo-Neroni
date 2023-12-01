import { Injectable } from '@angular/core';
import { CTodo } from './Modules/c-todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  Url:string = "http://localhost:3000/lista";

  create(elemento:Partial<CTodo>):Promise<CTodo>{
    return fetch(this.Url,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(elemento)
    })
    .then(res => res.json());
  }

  update(elemento:CTodo):Promise<CTodo>{
    return fetch(this.Url + "/" + elemento.id,{
      method:'PUT',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(elemento)
    })
    .then(res => res.json());
  }

  delete(id:string):Promise<CTodo>{
    return fetch(this.Url + "/" + id,{
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
      },
    })
    .then(res => res.json());
  }

  getAll():Promise<CTodo[]>{
    return fetch(this.Url)
    .then(res => res.json());
  }

  getById(id:string):Promise<CTodo>{
    return fetch(this.Url + "/" + id)
   .then(res => res.json());
  }

}
