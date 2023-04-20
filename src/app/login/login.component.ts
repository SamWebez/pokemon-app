import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = 'You are disconnect';
  name: string;
  password: string; 
  auth: AuthService;
  private logoutTimer: any;

  constructor(
    private authService: AuthService, 
    private router: Router,
  ) { }

  ngOnInit() {
    this.auth = this.authService;
    const timeoutDuration = 15000;
    this.logoutTimer = setTimeout(() => {
        this.logout() 
      }, timeoutDuration);
  }

  setMessage() {
    if(this.auth.isLoggedIn) { 
      this.message = 'You are connected';
    } else {
      this.message = 'Incorrect username or password'
    }
  }

  login() {
    this.message = 'Connection attempt in progress...';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) =>{
        this.setMessage();
        if(isLoggedIn) {
          this.router.navigate(['/pokemons']);
        } else {
          this.password = '';
          this.router.navigate(['/login'])
        }
      })
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
