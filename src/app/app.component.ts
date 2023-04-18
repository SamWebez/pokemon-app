import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}