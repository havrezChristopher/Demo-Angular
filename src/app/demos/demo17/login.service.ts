import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isConnected: boolean = false;

  constructor () { }

  login (): void {
    this.isConnected = true;
  }

  logout (): void {
    this.isConnected = false;
  }
}
