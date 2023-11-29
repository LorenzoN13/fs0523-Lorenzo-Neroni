import { Component, OnInit } from '@angular/core';
import { ICard } from '../../Modules/i-card';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component implements OnInit {

  card:ICard[] = [];
  constructor(private cardSvc: CardService) {}

    ngOnInit(): void {
      this.card = this.cardSvc.getInactivePost();

  }
}
