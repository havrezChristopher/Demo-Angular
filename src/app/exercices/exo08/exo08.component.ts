import { Component } from '@angular/core';

@Component({
  selector: 'app-exo08',
  templateUrl: './exo08.component.html',
  styleUrls: ['./exo08.component.scss']
})
export class Exo08Component {

  min: number = 50;
  max: number = 250;

  height: number = 50;
  width: number = 50;
  color: string = '#FFFFFF';
  borderWidth: number = 1;
  borderColor: string = '#000000';
  borderStyle: string = 'solid';

  isCircle: boolean = false;

  style: any;

  ngOnInit (): void {
    this.update();
  }


  update (): void {
    this.style = {
      'width': this.width + 'px',
      'height': this.height + 'px',
      'background-color': this.color,

      'border-width': this.borderWidth + 'px',
      'border-color': this.borderColor,
      'border-style': this.borderStyle
    };
  }

}
