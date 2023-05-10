import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-exo09',
  templateUrl: './exo09.component.html',
  styleUrls: ['./exo09.component.scss']
})
export class Exo09Component {

  article: Article = { name: '', qty: 1, dateAdd: new Date() };
  cart: Article[] = [];

  addProduct (): void {

    if (!this.article.name || this.article.qty <= 0) return;

    let productFound = this.cart.find(a => a.name.trim().toLocaleLowerCase() === this.article.name.trim().toLocaleLowerCase());

    if (!productFound)
      this.cart.push({ name: this.article.name, qty: this.article.qty, dateAdd: new Date() });
    else
      productFound.qty += this.article.qty;

    this.article.name = '';
    this.article.qty = 1;
  }

  removeProduct (article: Article): void {
    this.cart = this.cart.filter(a => a !== article);
  }

  decrease (articleId: number): void {
    this.cart[articleId].qty--;
    if (this.cart[articleId].qty === 0) this.removeProduct(this.cart[articleId]);
  }

  increase (articleId: number): void {
    this.cart[articleId].qty++;
  }

}
