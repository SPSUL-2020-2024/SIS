import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../Service/auth.service";
import {UserModel} from "../../../Users/Models/User.model";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  @Output() logged = new EventEmitter<boolean>();
  loginData = {
    "email": "",
    "pass": ""
  };

  changelogged(){
    //localStorage.setItem("logged", JSON.stringify(true));
  }

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.authService.loginUser(this.loginData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem("token", res.token)
        localStorage.setItem("userData", JSON.stringify(res.userData))
        this.router.navigate(['/'])
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status == 401){
            this.router.navigate(["/login"])

          }
        }
      }
    )
  }

}
