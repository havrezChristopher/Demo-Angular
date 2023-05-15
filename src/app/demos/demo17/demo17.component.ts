import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-demo17',
  templateUrl: './demo17.component.html',
  styleUrls: ['./demo17.component.scss']
})
export class Demo17Component implements OnInit {

  isConnected: boolean = false;

  constructor (private _loginService: LoginService) { }

  ngOnInit (): void {
    this.isConnected = this._loginService.isConnected;
  }

  login (): void {
    this._loginService.login();
    this.isConnected = this._loginService.isConnected;
  }

  logout (): void {
    this._loginService.logout();
    this.isConnected = this._loginService.isConnected;
  }

}
