import { User } from './../class/user';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  @Output()
  public userUpdated = new EventEmitter<User>();

  constructor() {
    if (sessionStorage.getItem('currentUser')) {
      this.userUpdated.emit(new User(sessionStorage.getItem('currentUser')));
    }
  }

  login(userName: string, password: string) {
    let user = new User(userName);
    sessionStorage.setItem('currentUser', userName);
    this.userUpdated.emit(user);
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    this.userUpdated.emit(null);
  }

  isLoggedIn() {
    return sessionStorage.getItem('currentUser') != null;
  }

}
