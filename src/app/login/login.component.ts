import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.gard';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name!: string;
  password!: string;
  auth!:AuthService ;

  constructor(private router:Router, private authService:AuthService,
    private guard: AuthGuard){ }

  ngOnInit(): void {
    this.auth=this.authService;
  }

  login() {
    
    this.auth
      .login(this.name, this.password)
      .subscribe((token: Boolean) => {        
        if (token) {
          this.router.navigate(["/header"]);
          console.log(`token isLoggEd:  ${token}`);
          
        } else {
          this.password = "";
          this.router.navigate(["/login"]);
        }
      });
  }

  logout(){

  }
}
