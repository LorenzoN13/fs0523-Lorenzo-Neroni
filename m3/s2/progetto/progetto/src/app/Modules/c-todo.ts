import { Todo } from "./Todo";

export class CTodo implements Todo {
  constructor(
    public id:string,
    public title:string,
    public completed:boolean
  ){}
}
