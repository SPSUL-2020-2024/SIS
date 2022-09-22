import { Component, OnInit } from "@angular/core";
import { CenterModel } from "src/app/traffic/models/center.model";
import { PostService } from "src/app/traffic/services/post/post.service";
import {
	FormControl,
	FormGroupDirective,
	NgForm,
	Validators,
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(
		control: FormControl | null,
		form: FormGroupDirective | NgForm | null
	): boolean {
		const isSubmitted = form && form.submitted;
		return !!(
			control &&
			control.invalid &&
			(control.dirty || control.touched || isSubmitted)
		);
	}
}

@Component({
	selector: "app-add-user",
	templateUrl: "./add-user.component.html",
	styleUrls: ["./add-user.component.sass"],
})
export class AddUserComponent implements OnInit {
	emailFormControl = new FormControl("", [
		Validators.required,
		Validators.email,
	]);

	matcher = new MyErrorStateMatcher();

	centers: CenterModel[] = [];
	Form = {
		TitleInput: null,
		FilesDefer: "",
		TextInput: null,
		PriorityInput: 1,
		CenterInput: 1,
	};

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.postService.getCenters().subscribe((res) => {
			this.centers = res;
		});
	}

	send() {}
}
