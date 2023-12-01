import { Component } from '@angular/core';
import { Todo } from '../../Modules/Todo';
import { TodosService } from '../../todos.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  constructor(private todosSvc:TodosService) { }

  newElementi:Partial<Todo> = {}

  caricamento:boolean = false;

  salva(){
    this.caricamento = true;
    this.todosSvc.create(this.newElementi).then( res => {
    this.caricamento = false;
  })
}
}
