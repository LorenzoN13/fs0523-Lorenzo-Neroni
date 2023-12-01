import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { Todo } from '../../Modules/Todo';
import { CTodo } from '../../Modules/c-todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {
  lista:Todo[] = []

  constructor(private todosSvc:TodosService) { }

  ngOnInit(){
    this.todosSvc.getAll().then( elementi => this.lista = elementi)
    
  }

  delete(id:string | undefined){
    if(!id) return

    this.todosSvc.delete(id).then( res => {
      this.lista = this.lista.filter(elemento => elemento.id !== id)
      alert(`L'elemento con l'id ${id} eliminato con successo`)
    })
  }
}
