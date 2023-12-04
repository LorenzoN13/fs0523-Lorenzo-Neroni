import { Injectable } from '@angular/core';
import { Card } from './Modules/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  Url:string = "https://dummyjson.com/products";

  create(elemento:Partial<Card>):Promise<Card>{
    return fetch(this.Url,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(elemento)
    })
    .then(res => res.json());
  }

  update(elemento:Card):Promise<Card>{
    return fetch(this.Url + "/" + elemento.id,{
      method:'PUT',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(elemento)
    })
    .then(res => res.json());
  }

  delete(id:string):Promise<Card>{
    return fetch(this.Url + "/" + id,{
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
      },
    })
    .then(res => res.json());
  }

  getAll():Promise<Card[]>{
    return fetch(this.Url)
    .then(res => res.json());
  }

  getById(id:string):Promise<Card>{
    return fetch(this.Url + "/" + id)
   .then(res => res.json());
  }

}
