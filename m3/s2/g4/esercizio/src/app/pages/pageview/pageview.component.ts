import { Component } from '@angular/core';
import { ICard } from '../../Modules/i-card';
import { CardService } from '../../card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrl: './pageview.component.scss'
})
export class PageviewComponent {
  card:ICard[] = [];
  constructor(private cardSvc: CardService, private route: ActivatedRoute) {}
  ngOnInit():void{
    this.route.params.subscribe((params:any) => {
      this.cardSvc.getPrendiId(params.id).find(card => this.card.push(card));
    })
  }
}
