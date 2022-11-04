import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  login(name: string) {
    return new Promise((success, reject) => {
      window.sessionStorage.setItem('user', name);
      setTimeout(() => {
        success(true);
      }, 20);
    });
  }

  isThereSession() {
    return window.sessionStorage.getItem('user') !== null && window.sessionStorage.getItem('user') !== undefined;
  }

  logOut() {
    window.sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}
