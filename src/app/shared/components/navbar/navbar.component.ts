import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/demos/demo20/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isConnected: boolean = false;
  isConnectedBehavior: boolean = false;

  constructor (private _authService: AuthService) { }

  ngOnInit (): void {
    // this.isConnected = this._authService.isConnected;
    this._authService.statusSubject$.subscribe({
      next: (data: boolean) => this.isConnected = data
    });

    this._authService.statusBehaviorSubject$.subscribe({
      next: (data: boolean) => {
        this.isConnectedBehavior = data;
        console.log(this._authService.statusBehaviorSubject$.getValue());
      }
    });
  }

}
