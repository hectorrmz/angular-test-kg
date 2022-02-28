import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginUser(): void {
    if (this.user.username && this.user.password) {
      this.router.navigate(['/']);
      sessionStorage.setItem('username', this.user.username);
    }
  }
}
