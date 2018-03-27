import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService} from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private login: LoginService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.login.isAdmin();
  }
}
