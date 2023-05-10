import { Component } from '@angular/core';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component {

  // Input
  messageToChild: string = 'Ceci est le message provenant du parent';
  colorToChild: string = 'bg-lightblue';

  changeColor (): void {
    if (this.colorToChild === 'bg-lightblue') this.colorToChild = 'bg-lightcoral';
    else this.colorToChild = 'bg-lightblue';
  }

  // Output
  messageFromChild: string = '';

  receiveEmit (value: string): void {
    this.messageFromChild = value;
  }

}
