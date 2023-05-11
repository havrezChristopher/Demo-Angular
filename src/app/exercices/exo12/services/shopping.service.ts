import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  articles: Article[] = [
    { name: 'Sel', quantity: 1 }
  ];

  constructor () { }

  addArticle (article: Article): void {
    let index = this.articles.findIndex(
      a => a.name.trim().toLocaleLowerCase() === article.name.trim().toLocaleLowerCase()
    );

    if (index === -1) this.articles.push(article);
    else this.increaseArticle(index);
  }

  removeArticle (index: number): void {
    this.articles.splice(index, 1);
  }

  increaseArticle (index: number): void {
    this.articles[index].quantity++;
  }

  decreaseArticle (index: number): void {
    if (this.articles[index].quantity > 1) this.articles[index].quantity--;
    else this.removeArticle(index);
  }

}
