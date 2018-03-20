import { Component } from '@angular/core';
import { CardService } from '../services/card-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cardService: CardService){
    cardService.get().subscribe((cards: any) => this.cards = cards);
  }
  addCard(cardText:string) {
    this.cards.push({text:cardText});
  }
  cards: Array<any> = [];
  title = 'app';
}
