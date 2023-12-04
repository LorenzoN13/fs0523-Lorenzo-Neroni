import { Component, Input } from '@angular/core';
import { Todo } from '../../Modules/i-card';
import { CardService } from '../../card.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  product:Todo[] = [];

  constructor(private cardSvc:CardService){}

  ngOnInit(){
    this.cardSvc.getAll().subscribe(data => this.product = data)
  }
}
