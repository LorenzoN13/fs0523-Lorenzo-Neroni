import { Injectable } from '@angular/core';
import { Card } from './Modules/card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private http:HttpClient) { }

  apiUrl:string = "https://dummyjson.com/products";

  getAll():Observable<Card[]>{
    return this.http.get<[]>(this.apiUrl);
  }

  getById(id:string):Observable<Card>{
    return this.http.get<Card>(this.apiUrl + `/${id}`);
  }

  create(card:Partial<Card>):Observable<Card>{
    return this.http.post<Card>(this.apiUrl,card)
  }

  update(card:Card){
    return this.http.put<Card>(this.apiUrl + `/${card.id}`,card);
  }

  delete(id:string){
    return this.http.delete<Card>(this.apiUrl + `/${id}`);
  }

}
