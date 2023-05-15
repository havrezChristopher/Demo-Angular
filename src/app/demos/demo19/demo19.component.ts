import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { SessionStorageService } from './services/session-storage.service';

@Component({
  selector: 'app-demo19',
  templateUrl: './demo19.component.html',
  styleUrls: ['./demo19.component.scss']
})
export class Demo19Component {

  constructor (
    private _localStorageService: LocalStorageService,
    private _sessionStorageService: SessionStorageService
  ) { }

  // • LocalStorage

  usernameLocal: string = "";
  savedUsernameLocal: string = "";

  saveLocal () {
    this._localStorageService.setItem('usernameLocal', this.usernameLocal);
  }

  loadLocal () {
    this.savedUsernameLocal = this._localStorageService.getItem('usernameLocal');
  }

  removeLocal () {
    this._localStorageService.removeItem('usernameLocal');
  }

  clearLocal () {
    this._localStorageService.clear();
  }

  // • SessionStorage

  usernameSession: string = "";
  savedUsernameSession: string = "";

  saveSession () {
    this._sessionStorageService.setItem('usernameSession', this.usernameSession);
  }

  loadSession () {
    this.savedUsernameSession = this._sessionStorageService.getItem('usernameSession');
  }

  removeSession () {
    this._sessionStorageService.removeItem('usernameSession');
  }

  clearSession () {
    this._sessionStorageService.clear();
  }


}
