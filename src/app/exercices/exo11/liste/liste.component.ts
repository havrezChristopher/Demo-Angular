import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  @Input() list: string[] = [];
  @Output() emitDelete: EventEmitter<number> = new EventEmitter();


  remove (index: number): void {
    this.emitDelete.emit(index);
  }

}
