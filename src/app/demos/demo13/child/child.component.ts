import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() maVariable: string = "test";

  @ViewChild('ref') el!: ElementRef<HTMLParagraphElement>;

  constructor () {
    console.log("Constructor");
    // console.log("ChildComponent constructor el:", this.el);
  }

  ngOnChanges (changes: SimpleChanges): void {
    console.log("ChildComponent  ngOnChanges  changes:", changes);
  }

  ngOnInit (): void {
    console.log("ngOnInit");
    // Faire les instanciations lourdes
    // console.log("ChildComponent ngOnInit el:", this.el);
  }

  // Quasiment jamais utilisé
  ngDoCheck (): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit (): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked (): void {
    console.log("ngAfterContentChecked");
  }

  // Template HTML présent sur le DOM
  ngAfterViewInit (): void {
    console.log("ngAfterViewInit");
  }

  // Quasiment jamais utilisé
  ngAfterViewChecked (): void {
    console.log("ngAfterViewChecked");
  }

  // Déclenché dès qu'un élément est détruit
  // <!> utile pour le nettoyage
  ngOnDestroy (): void {
    console.log("ngOnDestroy");
  }


}
