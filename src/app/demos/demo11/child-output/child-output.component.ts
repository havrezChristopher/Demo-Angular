import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent {

  messageFromChild: string = 'Le message provenant du composant enfant';

  @Output() emitToParent = new EventEmitter<string>();

  onEmit (): void {
    this.emitToParent.emit(this.messageFromChild);
  }

}
