import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrls: ['./demo16.component.scss']
})
export class Demo16Component implements OnInit {

  id!: number;
  name!: string;

  constructor (private router: Router, private activedRoute: ActivatedRoute) {
  }

  ngOnInit (): void {
    console.log("Demo16Component  router:", this.router);
    console.log("Demo16Component  activedRoute:", this.activedRoute);

    // La propriété snapshot représente la route à l'instant T
    if (this.activedRoute.snapshot.params['id']) {
      this.id = this.activedRoute.snapshot.params['id'];
    }

    if (this.activedRoute.snapshot.queryParams['name']) {
      this.name = this.activedRoute.snapshot.queryParams['name'];
    }

  }

  navigate (): void {
    // this.router.navigate(['demos', 'demo16', 'routage']);
    this.router.navigate(['demos/demo16/routage']);
  }

  navigateWithParam (): void {
    this.router.navigate(['demos/demo16/routage/42']);
  }

  navigateWithQuery (): void {
    this.router.navigate(['demos/demo16/routage'], { queryParams: { 'name': 'Quentin' } });
  }
}
