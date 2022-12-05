import { Component, Inject, LOCALE_ID, OnInit, Self } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { PostService } from "src/app/traffic/services/post/post.service";
import { formatDate } from "@angular/common";
import { UserService } from "src/app/traffic/services/user/user.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
	selector: "app-post-history",
	templateUrl: "./post-history.component.html",
	styleUrls: ["./post-history.component.sass"],
})
export class PostHistoryComponent implements OnInit {
	postId!: number;
	postData: any;
	postChanges: any;

	loading = {
		changes: {
			response: false,
			error: false,
		},
	};

	constructor(private postService: PostService, private userService: UserService, @Inject(LOCALE_ID) private locale: string, public dialogRef: MatDialogRef<Self>) {}

	ngOnInit(): void {
		this.postService.getPost(this.postId).subscribe(
			(res) => {
				this.loading.changes.response = true;
				this.postData = res;
				this.postChanges = JSON.parse(res.changes);
				for (let i = 0; i < this.postChanges.length; i++) {
					this.userService.getUser(this.postChanges[i].user_id).subscribe((res) => {
						this.postChanges[i].user_data = res;
					});
				}
				console.log(this.postChanges);
			},
			(error) => {}
		);
	}

	humanDateReadable(dateString: string) {
		return formatDate(Date.parse(dateString), "dd. MM. yyyy hh:ss", this.locale);
	}

	parseJson(json: string) {
		return JSON.parse(json);
	}

	close(): void {
		this.dialogRef.close();
	}
}
