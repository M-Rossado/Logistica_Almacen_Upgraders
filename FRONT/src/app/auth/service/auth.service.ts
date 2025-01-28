import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient)

  constructor() { }

  // register(userForm: any): Observable<any> {
  //   return this.http.post('http://localhost:3501/api/users/register',userForm)
  // }

  login(userLoginForm: any): Observable<any> {
    return this.http.post('http://localhost:3501/api/users/login',userLoginForm)
  }

  verifyToken(): Observable<any> {
    return this.http.get('http://localhost:3500/api/home/verify-token')
  }

  // verifyRole(): Observable<any> {
  //   const userEmail = localStorage.getItem('email')
  //   return this.http.post('http://localhost:3501/api/users/verify-role', {email: userEmail})
  // }

  // verifyRole() {
  //   const role = localStorage.getItem('role')
  //   return role
  // }

}
