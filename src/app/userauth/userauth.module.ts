import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule } from '@angular/router'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ]),
    ToastrModule.forRoot()
  ]
})
export class UserauthModule { }
