import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { UserService } from "src/app/traffic/services/user/user.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router, private userService: UserService, private snackBar: MatSnackBar) {}
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
		let Userrole = this.userService.getData()[0].role_id;
		if (route.data["required_role"] && route.data["required_role"] !== Userrole) {
			this.router.navigate([""]);
			return false;
		} else {
			return true;
		}
	}
}
