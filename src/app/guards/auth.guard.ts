import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanActivatePage implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const username = sessionStorage.getItem('username');
    if (!username) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
