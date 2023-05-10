import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  private auth: boolean = false;

  constructor (private _apiService: ApiService) { }

  connect (username: string, password: string): void {
    const data = this._apiService.getData();

    if (data.username === username && data.password === password)
      this.auth = true;
  }

  disconnect () {
    this.auth = false;
  }

  isLoggedIn (): boolean {
    return this.auth;
  }
}
