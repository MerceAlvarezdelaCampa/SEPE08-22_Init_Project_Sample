import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateApp implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (window.sessionStorage.getItem('logged') !== null && window.sessionStorage.getItem('logged') === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}