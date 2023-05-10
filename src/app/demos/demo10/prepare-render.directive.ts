import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrepareRender]'
})
export class PrepareRenderDirective {

  constructor (private element: ElementRef<HTMLElement>) {
    this.element.nativeElement.style.color = 'chartreuse';

    this.element.nativeElement.addEventListener('click', () => {
      console.log(this.element.nativeElement);
    });
  }

}
