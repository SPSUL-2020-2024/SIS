import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../../modules/login/Service/auth.service";
import { UserServiceService } from "../../modules/users/Services/user-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router, private userService: UserServiceService, private snackBar: MatSnackBar) {}
	paymentID = [67, 73];
	canActivate(next: ActivatedRouteSnapshot): boolean {
		if (this.authService.lodgedIn()) {
			return this.checkUser(next);
		} else {
			this.router.navigate(["/login"]).then((navigated: boolean) => {
				if (navigated) {
					this.snackBar.open("Wrong login information", "X", { panelClass: ["error"] });
				}
			});
			return false;
		}
	}

	checkUser(route: ActivatedRouteSnapshot) {
		let Userrole = this.userService.getData()[0].roleID;
		let UserId = this.userService.getData()[0].userID;
		if (UserId && this.paymentID.includes(UserId)) {
			this.router.navigate(["/payment_required"]);
			return true;
		} else {
			if (route.data["required_role"] && route.data["required_role"] !== Userrole) {
				this.router.navigate([""]);
				return false;
			} else {
				return true;
			}
		}
	}
}
