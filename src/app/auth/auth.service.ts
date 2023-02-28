import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: boolean = false;
  constructor(private router:Router) {}

  login(name: string, password: string): Observable<boolean> {

    this.token = (name == 'root' && password == 'root') ;
    
    return of(this.token);
  }

  logOut(){
    this.token =false;    
    return of(this.token);
  }

  getToken(): boolean {
    return this.token;
  }


}
