import { Component } from '@angular/core';
import { CardService } from '../../card.service';
import { ICard } from '../../Modules/i-card';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component {
  card:ICard[] = [];
  constructor(private cardSvc: CardService) {}

    ngOnInit(): void {
      this.card = this.cardSvc.getInattivoPost();
    }
}
