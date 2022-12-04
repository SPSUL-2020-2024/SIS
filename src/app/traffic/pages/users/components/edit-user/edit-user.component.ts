import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { CenterModel } from "src/app/traffic/models/center.model";
import { RoleModel } from "src/app/traffic/models/role.model";
import { UserService } from "src/app/traffic/services/user/user.service";
import { PostService } from "src/app/traffic/services/post/post.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}

@Component({
	selector: "app-edit-user",
	templateUrl: "./edit-user.component.html",
	styleUrls: ["./edit-user.component.sass"],
})
export class EditUserComponent implements OnInit {
	userId!: number;
	userData!: any;

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
		this.userService.getUser(this.userId).subscribe((res) => {
			this.userData = res;
			this.Form = {
				fnameInput: this.userData.name,
				lnameInput: this.userData.lname,
				phoneInput: this.userData.phone,
				emailInput: this.userData.email,
				roleInput: this.userData.role_id,
				centerInput: this.userData.center_id,
				passwordInput: null,
			};
		});
		this.postService.getCenters().subscribe((res) => {
			this.centers = res;
		});
		this.userService.getAllRoles().subscribe((res) => {
			this.roles = res;
		});
	}

	send() {
		if (this.Form.fnameInput != null && this.Form.lnameInput != null && this.Form.phoneInput != null && this.Form.emailInput != null && this.Form.roleInput != null && this.Form.centerInput != null) {
			this.userService.editUser(this.userId, this.Form);
		}
	}
}
