import { Injectable } from '@angular/core';

@Injectable()
export class CardService {
	listCards: string[] = [];
	strCards: string = '';

	getCards(): string[] {
		return this.listCards;
	}

	setCards(cards): void {
		this.listCards = cards.sort();
	}

	getCardString(): string {
		return this.strCards;
	}

	setCardsString(cards): void {
		this.strCards = cards;
		this.setCards(cards.split(/\r?\n/).map(function(x){return x.replace('1 ', '');}).filter(e => e !== ''));
	}

	resetCards(): void {
		this.setCardsString(this.getCardString());
	}
}
