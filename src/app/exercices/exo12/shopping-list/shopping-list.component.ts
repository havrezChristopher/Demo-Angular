import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  @Input() shoppingList: Article[] = [];
  @Output() deleteItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() increaseItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() decreaseItem: EventEmitter<number> = new EventEmitter<number>();

  remove (index: number): void {
    this.deleteItem.emit(index);
  }

  increase (index: number): void {
    this.increaseItem.emit(index);
  }

  decrease (index: number): void {
    this.decreaseItem.emit(index);
  }

}
