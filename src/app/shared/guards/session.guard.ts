import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Injectable({
    providedIn: 'root'
  })
export class CanActivatePage implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(this.sessionService.isThereSession()) {
        return true;
    } else {
        this.router.navigate(['login']);
        return false;
    }
  }
}