import { Component } from '@angular/core';
import { Todo } from '../../Modules/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  newElementi:Partial<Todo> = {}
}
