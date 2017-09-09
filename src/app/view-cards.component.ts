import { Component, OnInit, Renderer } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: [ './view-cards.component.css' ]
})
export class ViewComponent implements OnInit {

  listCards: string[] = [];
  filterString: string = '';

	constructor(
		private cardService: CardService,
		private renderer: Renderer
	) {}

	ngOnInit(): void {
		this.getCards();
	}

	onDelete(card): void {
		this.listCards = this.listCards.filter(e => e !== card);
		this.cardService.setCards(this.listCards);
	}

	onReset(): void {
		this.cardService.resetCards();
		this.getCards();
	}

	getCards(): void {
		this.listCards = this.cardService.getCards();
	}

	isMatch(card): boolean {
		if (this.filterString === '') {
			return false;
		}
		else if (card.toLowerCase().indexOf(this.filterString.toLowerCase()) !== -1) {
			return true;
		}
		else {
			return false;
		}
	}

	setFocus(): void {
		let elem = this.renderer.selectRootElement('.filter-box')
		console.log('on blur, ' + elem);
		elem.focus();
		elem.select();
	}
}
