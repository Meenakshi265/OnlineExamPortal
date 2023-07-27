import { CanActivateFn } from '@angular/router';


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login.service';



@Injectable({
  providedIn: 'root'
})
export class userGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) { };
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('CanActivate called  user normal');

    if (this.login.isLoggedIn() && this.login.getUserRole() == 'NORMAL') {
      return true;
    } else {
      this.router.navigate(['/loginuser']);
      return false;
    }
  }

}






