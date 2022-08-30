import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "../../Service/auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";

declare function onUserLoginJs(): any;
declare function beforePageChangeJs(): any;

@Component({
	selector: "app-login-page",
	templateUrl: "./login-page.component.html",
	styleUrls: ["./login-page.component.sass"],
})
export class LoginPageComponent implements OnInit {
	@Output() logged = new EventEmitter<boolean>();
	loginData = {
		email: "",
		pass: "",
	};

	changelogged() {
		//localStorage.setItem("logged", JSON.stringify(true));
	}

	redirectUser() {
		this.router.navigate(["/"]);
		onUserLoginJs();
	}

	constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

	ngOnInit(): void {}

	loginUser() {
		this.authService.loginUser(this.loginData).subscribe(
			(res) => {
				localStorage.setItem("token", res.token);
				localStorage.setItem("userData", JSON.stringify(res.userData));
				beforePageChangeJs();
				(async () => {
					await new Promise((f) => setTimeout(f, 1000));
					this.redirectUser();
				})();
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status == 401) {
						this.snackBar.open("Wrong login information", "X", { panelClass: ["error"] });
					} else if (err.status == 418) {
						this.snackBar.open("Please enter email and pass", "X", { panelClass: ["error"] });
					} else if (err.status == 502) {
						this.snackBar.open("Unknow error", "X", { panelClass: ["error"] });
					}
				}
			}
		);
	}
}
