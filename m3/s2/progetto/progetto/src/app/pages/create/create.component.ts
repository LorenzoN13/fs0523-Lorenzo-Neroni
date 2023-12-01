import { Component } from '@angular/core';
import { CTodo } from '../../Modules/c-todo';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  lista:CTodo[] = []

  constructor(private todosSvc:TodosService) { }

  ngOnInit(){
    this.todosSvc.getAll().then( elementi => this.lista = elementi)
  }

}
