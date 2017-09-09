import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Router } from '@angular/router';

@Component({
	selector: 'import-cards',
	templateUrl: './import-cards.component.html',
	styleUrls: [ './import-cards.component.css' ]
})
export class ImportComponent implements OnInit {

	strCardList: string = '';

	constructor (
		private cardService: CardService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.strCardList = this.cardService.getCardString();
	}

	onImport(): void {
		this.cardService.setCardsString(this.strCardList);
		this.router.navigate(['/view']);
	}
}
