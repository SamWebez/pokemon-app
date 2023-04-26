import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-logout-timer',
  template: '',
  styles: [
  ]
})
export class LogoutTimerComponent implements OnInit {
  private logoutTimer: number | NodeJS.Timeout 
  auth: AuthService;
  message: string;

  constructor() {}

  ngOnInit() {
    const timeoutDuration = 150000; 
    console.log(timeoutDuration);

    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, timeoutDuration);
  }

  logout() {
    this.auth.logout();
    this.message = 'You are disconnected';
  }

  resetLogoutTimer() {

    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }

    this.ngOnInit();
  }
}