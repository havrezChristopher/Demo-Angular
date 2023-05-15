import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const userResolver: ResolveFn<any> = (route, state) => {
  console.log("route:", route);
  const userId = route.params['id'];
  return userId ? inject(UserService).getUserById(userId) : null;
};
