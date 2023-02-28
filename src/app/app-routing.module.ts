import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.gard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
{ path: "login", component: LoginComponent },
{ path: "header", component: HeaderComponent, canActivate:[AuthGuard]},
{ path: "", redirectTo: "login", pathMatch: "full" },  

//   { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
