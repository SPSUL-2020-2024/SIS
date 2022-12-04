import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ErrorHandlerClass implements ErrorHandler {
	constructor(public snackBar: MatSnackBar) {}

	handleError(error: any): void {
		if (error instanceof HttpErrorResponse) {
			console.log(error);
			if (error.status == 401) {
				this.snackBar.open("Wrong login information", "X", { panelClass: ["error"] });
			} else if (error.status == 418) {
				this.snackBar.open("Please enter email and pass", "X", { panelClass: ["error"] });
			}
		}
	}
}
