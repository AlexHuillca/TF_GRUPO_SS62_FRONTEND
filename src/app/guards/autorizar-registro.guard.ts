import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

export class AutorizarRegistroGuard {

  constructor (private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
   MaybeAsync<GuardResult>
// boolean | UrlTree | RedirectCommand | Observable<boolean | UrlTree | RedirectCommand> | Promise<boolean | UrlTree | RedirectCommand>
  {
    let permisos = this.userService.getAuthoritiesActual();
    if (permisos) {
      if (permisos.indexOf("ADMIN")>=0) {
        return true;
      }
    }
    return false;
  }


}
