import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('social-id'));
  loggedIn$ = this.loggedIn.asObservable();

  login(id:string, name:string) {
    localStorage.setItem('social-id', id);
    localStorage.setItem('social-name', name);
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('social-id');
    localStorage.removeItem('social-name');
    this.loggedIn.next(false);
  }
}
