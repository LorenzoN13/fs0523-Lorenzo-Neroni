import { Injectable } from '@angular/core';
import { Observable, Subject, map, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Modules/i-card';

type responseData = {
  products: Todo[];
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  favoritesubject: Subject<Todo> = new Subject();
  favorite$: Observable<Todo> = this.favoritesubject.asObservable();

  cartsubject: Subject<Todo> = new Subject();
  cart$: Observable<Todo> = this.cartsubject.asObservable();

  constructor( private http:HttpClient) { }

  apiUrl:string = "https://dummyjson.com/product";

  getAll(){
    return this.http.get<responseData>(this.apiUrl)
    .pipe(map(r => r.products));
  }

  addToCart(products:Todo){
    this.cartsubject.next(products);
  }

  addToFavorite(products:Todo){
    this.favoritesubject.next(products);
  }
}
