import { CanDeactivateFn } from '@angular/router';

export const canDesactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return confirm('Voulez-vous quitter cette page ?');
};
