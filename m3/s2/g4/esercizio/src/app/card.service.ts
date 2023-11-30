import { Injectable } from '@angular/core';
import { ICard } from './Modules/i-card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards:ICard[] = [
    {
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":false
    },
    {
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":true
    },
    {
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":false
    },
    {
      "header":"Post",
      "title":"Dolor velit sint tempor culpa cupidat ipsum do ad tempor eiusmod.",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem maiores necessitatibus eveniet dicta veritatis excepturi nihil, officiis dolor sint sit qui odit quae inventore blanditiis voluptatibus doloribus facilis aliquam.",
      "author":"Mattia Rossi",
      "boolean":false
    },
    {
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
}
