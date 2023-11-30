import { Component } from '@angular/core';
import { ICard } from '../../Modules/i-card';
import { CardService } from '../../card.service';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrl: './pageview.component.scss'
})
export class PageviewComponent {
  card:ICard[] = [];
  constructor(private cardSvc: CardService) {}
}
