import { Component, OnInit } from "@angular/core";
import { CenterModel } from "src/app/traffic/models/center.model";
import { RoleModel } from "src/app/traffic/models/role.model";
import { PostService } from "src/app/traffic/services/post/post.service";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "src/app/traffic/services/user/user.service";

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

	constructor(private postService: PostService, private userService: UserService) {}

	ngOnInit(): void {
		this.postService.getCenters().subscribe((res) => {
			this.centers = res;
		});
		this.userService.getAllRoles().subscribe((res) => {
			this.roles = res;
		});
	}

	send() {}
}
