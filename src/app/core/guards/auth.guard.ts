import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { UserServiceService } from "../../modules/users/services/user-service.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router, private userService: UserServiceService, private snackBar: MatSnackBar) {}
	canActivate(next: ActivatedRouteSnapshot): boolean {
		if (this.authService.loggedIn()) {
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
		if (route.data["required_role"] && route.data["required_role"] !== Userrole) {
			this.router.navigate([""]);
			return false;
		} else {
			return true;
		}
	}
}
