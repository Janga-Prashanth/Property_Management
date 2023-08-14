import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router : Router) { }

  setToken(token: string, username:string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    }

    getToken(): string | null {
    return localStorage.getItem('token');
    }

    gwtUserName(): string | null {
      return localStorage.getItem('username');
      }

    isLoggedIn() {
    return this.getToken() != null;
    }

    Logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.router.navigate(['home']);
      }

    
      Login({ email, password }: any): Observable<any> {
      if (email == "superadmin@propsmart.com" && password == "admin@123") {
      this.setToken('abcdefghijklmnopqrstuvwxyz','Bale');
      return of ({ name: 'Srinivas Rao Desai', email: 'admin@gmail.com' });
      }
      else{
        this.router.navigate(['home']);
        return throwError(new Error('Username And Password Not Matching'));
      }
    }    
}
