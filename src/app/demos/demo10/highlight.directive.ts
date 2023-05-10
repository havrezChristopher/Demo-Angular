import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight: string = "";
  @Input() defaultColor: string = "";

  constructor (private el: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter () {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave () {
    this.el.nativeElement.style.backgroundColor = '';
  }

  @HostListener('click')
  onMouseClick () {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mousedown')
  onMouseDown () {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

}
