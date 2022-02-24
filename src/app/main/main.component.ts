import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  username: string = '';

  ngOnInit(): void {
    const username = sessionStorage.getItem('username');
    username ? (this.username = username) : this.redirectToLoginPage();
  }

  logOut(): void {
    sessionStorage.clear();
    this.redirectToLoginPage();
  }

  private redirectToLoginPage(): void {
    this.router.navigate(['login']);
  }
}
