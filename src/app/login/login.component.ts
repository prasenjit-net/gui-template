import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.router.navigateByUrl('');
    }
  }

  login(userName: string, password: string, remembered: boolean) {
    this.auth.login(userName, password);
    let route = sessionStorage.getItem('nextRoute');
    if (route) {
      this.router.navigateByUrl(route);
    } else {
      this.router.navigateByUrl('');
    }
  }
}
