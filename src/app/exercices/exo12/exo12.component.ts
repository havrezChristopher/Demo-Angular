import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-exo12',
  templateUrl: './exo12.component.html',
  styleUrls: ['./exo12.component.scss']
})
export class Exo12Component implements OnInit {

  article: Article = { name: '', quantity: 1 };
  liste!: Article[];

  constructor (private _shoppingService: ShoppingService) { }

  ngOnInit (): void {
    this.liste = this._shoppingService.articles;
  }

  add (): void {
    this._shoppingService.addArticle({ name: this.article.name, quantity: this.article.quantity });
  }

  remove (index: number): void {
    this._shoppingService.removeArticle(index);
  }

  increment (index: number): void {
    this._shoppingService.increaseArticle(index);
  }

  decrement (index: number): void {
    this._shoppingService.decreaseArticle(index);
  }

}
