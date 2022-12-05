import { Component, OnInit, Self } from "@angular/core";
import { CenterModel } from "src/app/traffic/models/center.model";
import { RoleModel } from "src/app/traffic/models/role.model";
import { PostService } from "src/app/traffic/services/post/post.service";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "src/app/traffic/services/user/user.service";
import { MatDialogRef } from "@angular/material/dialog";

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: "app-add-user",
	templateUrl: "./add-user.component.html",
	styleUrls: ["./add-user.component.sass"],
})
export class AddUserComponent implements OnInit {
	emailFormControl = new FormControl("", [Validators.required, Validators.email]);

	matcher = new MyErrorStateMatcher();

	centers: CenterModel[] = [];
	roles: RoleModel[] = [];
	Form = {
		fnameInput: null,
		lnameInput: null,
		phoneInput: null,
		emailInput: null,
		roleInput: null,
		centerInput: null,
		passwordInput: null,
	};

	constructor(private postService: PostService, private userService: UserService, public dialogRef: MatDialogRef<Self>) {}

	ngOnInit(): void {
		this.postService.getCenters().subscribe((res) => {
			this.centers = res;
		});
		this.userService.getAllRoles().subscribe((res) => {
			this.roles = res;
		});
	}

	send() {
		if (this.Form.fnameInput != null && this.Form.lnameInput != null && this.Form.phoneInput != null && this.Form.emailInput != null && this.Form.roleInput != null && this.Form.centerInput != null && this.Form.passwordInput) {
			this.userService.createUser(this.Form);
			this.close();
			location.reload();
		}
	}

	close(): void {
		this.dialogRef.close();
	}
}
