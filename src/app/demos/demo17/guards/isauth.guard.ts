import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';

export const isauthGuard: CanActivateFn = (route, state) => {
  return inject(LoginService).isConnected
    ? true
    : inject(Router).createUrlTree(['/demos/demo17']); // Pointer vers la page de connexion
};
