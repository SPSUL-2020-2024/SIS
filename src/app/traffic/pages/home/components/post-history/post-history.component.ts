import { Component, OnInit, Self } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { PostService } from "src/app/traffic/services/post/post.service";

@Component({
	selector: "app-post-history",
	templateUrl: "./post-history.component.html",
	styleUrls: ["./post-history.component.sass"],
})
export class PostHistoryComponent implements OnInit {
	postId!: number;
	postData: any;

	constructor(private postService: PostService, public dialogRef: MatDialogRef<Self>) {}

	ngOnInit(): void {
		this.postService.getPost(this.postId).subscribe((res) => {
			this.postData = res;
		});
	}

	parseJson(json: string) {
		return JSON.parse(json);
	}

	close(): void {
		this.dialogRef.close();
	}
}
