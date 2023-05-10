import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../demos/demo12/services/fake-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isConnected: boolean = false;

  constructor (private authService: FakeAuthService) { }

  ngOnInit (): void {
    this.isConnected = this.authService.isLoggedIn();
  }


}
