import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn:"root"
}
)
export class AutorizarConsultaGuard {

  constructor (private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
   MaybeAsync<GuardResult>
// boolean | UrlTree | RedirectCommand | Observable<boolean | UrlTree | RedirectCommand> | Promise<boolean | UrlTree | RedirectCommand>
  {
    let permisos = this.userService.getAuthoritiesActual();
    if (permisos) {
      if (permisos.indexOf("CONSULTA")>=0) {
        return true;
      }
    }
    return false;
  }
}
