import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo18',
  templateUrl: './demo18.component.html',
  styleUrls: ['./demo18.component.scss']
})
export class Demo18Component implements OnInit {

  user!: any;

  constructor (private _route: ActivatedRoute) { }

  ngOnInit (): void {
    console.log(this._route);
    this.user = this._route.snapshot.data['user'];
  }

}
