import { Todo } from "./i-card";

export class Card implements Todo {
  constructor(
  public id:number,
  public title: string,
  public description: string,
  public price: number,
  public discountPercentage: number,
  public rating: number,
  public stock: number,
  public brand: string,
  public category: string,
  public thumbnail: string,
  public images: string[]){}
}
