import { CanActivateFn } from '@angular/router';

export const autorizarRegistroGuard: CanActivateFn = (route, state) => {
  return true;
};
