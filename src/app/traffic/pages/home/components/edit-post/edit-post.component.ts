import { PostService } from "./../../../../services/post/post.service";
import { Component, OnInit, Self } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { CenterModel } from "src/app/traffic/models/center.model";
import { MyErrorStateMatcher } from "../../../users/components/edit-user/edit-user.component";
import { PriorityModel } from "src/app/traffic/models/priority.model";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "app-edit-post",
	templateUrl: "./edit-post.component.html",
	styleUrls: ["./edit-post.component.sass"],
})
export class EditPostComponent implements OnInit {
	postId!: number;
	postData: any;
	centers: CenterModel[] = [];
	priorities: PriorityModel[] = [];
	Form = {
		titleInput: null,
		filesDefer: "",
		textInput: null,
		priorityInput: null,
		centerInput: null,
	};

	constructor(private postService: PostService, public dialogRef: MatDialogRef<Self>) {}

	ngOnInit(): void {
		this.postService.getPost(this.postId).subscribe((res) => {
			this.postData = res;
			this.Form = {
				titleInput: this.postData.title,
				filesDefer: "",
				textInput: this.postData.text,
				priorityInput: this.postData.priority,
				centerInput: this.postData.center_id,
			};
		});
		this.postService.getCenters().subscribe((res) => {
			this.centers = res;
		});
		this.postService.getPriorities().subscribe((res) => {
			this.priorities = res;
		});
	}

	onUploadFilesComplete(event: any) {
		this.Form.filesDefer = JSON.stringify(event);
	}

	send(): void {
		if (this.Form.titleInput != null && this.Form.textInput != null && this.Form.centerInput != null && this.Form.priorityInput != null) {
			this.postService.editPost(this.postId, this.Form);
			this.dialogRef.close();
			location.reload();
		}
	}

	visible = false;

	open(): void {
		this.visible = true;
	}

	close(): void {
		this.visible = false;
	}
}
