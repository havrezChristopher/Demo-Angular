import { Component } from '@angular/core';

@Component({
  selector: 'app-exo11',
  templateUrl: './exo11.component.html',
  styleUrls: ['./exo11.component.scss']
})
export class Exo11Component {

  article: string = '';
  articles: string[] = ['Sel', 'Poivre'];

  addItem (): void {
    this.articles.push(this.article);
  }

  removeItem (index: number): void {
    this.articles.splice(index, 1);
  }

}
