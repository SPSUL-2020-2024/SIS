import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './Components/login-page/login-page.component';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],

  imports: [
    CommonModule

  ]
})
export class LoginModule { }
