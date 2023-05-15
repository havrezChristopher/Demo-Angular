import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  return confirm('Voulez-vous vous rendre chez l\'enfant');
};
