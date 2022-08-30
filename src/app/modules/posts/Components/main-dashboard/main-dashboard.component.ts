import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { PostService } from "../../Service/post.service";
import { MatDialog } from "@angular/material/dialog";
import { AddPostComponent } from "../add-post/add-post.component";
import { Router } from "@angular/router";

@Component({
	selector: "app-main-dashboard",
	templateUrl: "./main-dashboard.component.html",
	styleUrls: ["./main-dashboard.component.sass"],
})
export class MainDashboardComponent implements OnInit {
	polePrispevku: any[] = [];

	constructor(private postService: PostService, public dialog: MatDialog, private router: Router) {}

	ngOnInit(): void {
		this.postService.getPosts().subscribe(
			(Response) => {
				this.polePrispevku = Response;
			},
			(error) => {
				if (error instanceof HttpErrorResponse) {
					if (error.status == 401) {
						this.router.navigate(["/login"]);
					}
				}
			}
		);
	}
	openAddPosts() {
		let dialogRef = this.dialog.open(AddPostComponent, {
			height: "800px",
			width: "600px",
		});
	}
}
