import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor () { }

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Je passe par l'interceptor");

    const authToken = localStorage.getItem('authToken');

    // Vérifier s'il y a un token et qu'il n'est pas vide
    if (authToken && authToken != '') {
      console.log("TokenInterceptor  intercept  authToken:", authToken);
      const authReq = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken
        }
      });

      // Ne pas oublier d'ajouter l'interceptor dans le app.module.ts
      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
