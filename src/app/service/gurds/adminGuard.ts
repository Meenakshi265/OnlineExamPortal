import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login.service';



@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  constructor(private login: LoginService, private router: Router) { };
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('CanActivate called');

    if (this.login.isLoggedIn() && this.login.getUserRole() == 'ADMIN') {
      console.log(this.login.getUserRole() +" admin guard......... called......")
      return true;
    } else {
      this.router.navigate(['/loginuser']);
      return false;
    }
  }

}
