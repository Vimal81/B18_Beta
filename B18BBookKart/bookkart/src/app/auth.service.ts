import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  private _loginUrl = "https://bookcart.azurewebsites.net/api/login";
  private _registerUrl = "https://bookcart.azurewebsites.net/api/user";
  

  constructor(private http:HttpClient) { }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  registerUser(user: any) {
        return this.http.post<any>(this._registerUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
  
  getToken() {
    return localStorage.getItem('token') 
  }
}
