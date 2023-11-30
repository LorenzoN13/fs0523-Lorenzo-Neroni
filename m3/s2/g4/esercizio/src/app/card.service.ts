import { Injectable } from '@angular/core';
import { ICard } from './Modules/i-card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards:ICard[] = [
    {
      "id":1,
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":false
    },
    {
      "id":2,
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":true
    },
    {
      "id":3,
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":false
    },
    {
      "id":4,
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":false
    },
    {
      "id":5,
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":true
    }
  ];
  ngOnInit(){}

  getAttivoPost(){
    return this.cards.filter(card => card.boolean === true);
  }
  getInattivoPost(){
    return this.cards.filter(card => card.boolean === false);
  }

  getPrendiId(id:number){
    return this.cards.filter(card => card.id == id);
  }

}
