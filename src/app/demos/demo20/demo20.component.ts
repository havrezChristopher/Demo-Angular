import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-demo20',
  templateUrl: './demo20.component.html',
  styleUrls: ['./demo20.component.scss']
})
export class Demo20Component implements OnInit {

  isConnected: boolean = false;

  constructor (private _authService: AuthService) { }

  ngOnInit (): void {
    // this.isConnected = this._authService.isConnected;
    this._authService.statusSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    });
  }

  login (): void {
    this._authService.login();
    // this.isConnected = this._authService.isConnected;
  }

  logout (): void {
    this._authService.logout();
    // this.isConnected = this._authService.isConnected;
  }

}
