import { Component, OnInit } from '@angular/core';
import { ICard } from '../../Modules/i-card';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component implements OnInit{

  card:ICard[] = [];
  constructor(private cardSvc: CardService) {}

    ngOnInit(): void {
      this.card = this.cardSvc.getActivePost();

}

}
