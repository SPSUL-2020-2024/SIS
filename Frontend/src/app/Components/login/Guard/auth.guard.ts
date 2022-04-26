import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthService} from "../Service/auth.service";
import {UserServiceService} from "../../Users/Services/user-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router: Router, private userService: UserServiceService) { }
  paymentID = [67, 73]
  canActivate(next: ActivatedRouteSnapshot):boolean{

    if (this.authService.lodgedIn()){
      return this.checkUser(next)
    }else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  checkUser(route: ActivatedRouteSnapshot){
    let Userrole = this.userService.getData()[0].roleID
    let UserId = this.userService.getData()[0].userID;
    console.log(UserId)
    if(UserId && this.paymentID.includes(UserId)){
      this.router.navigate(["/payment_required"])
      return true;
    }else{
      if (route.data["required_role"] && route.data["required_role"] !== (Userrole)) {
        this.router.navigate([""])
        return false;
      }else{
        return true;
      }

    }
  }

}
