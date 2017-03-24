import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  visible: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')) {
      // logged in so nav visible
      this.visible = true;
    }
    this.auth.userUpdated.map(u => u != null).subscribe(a => this.visible = a);
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
