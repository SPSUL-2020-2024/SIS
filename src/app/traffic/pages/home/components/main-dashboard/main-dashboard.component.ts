import { PostModel } from "./../../../../models/post.model";
import { Router } from "@angular/router";
import { FileService } from "./../../../../services/file/file.service";
import { MimeService } from "./../../../../../core/services/mime/mime.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { PostService } from "../../../../services/post/post.service";
import { MatDialog } from "@angular/material/dialog";
import { AddPostComponent } from "../add-post/add-post.component";
import { EditPostComponent } from "../edit-post/edit-post.component";

@Component({
	selector: "app-main-dashboard",
	templateUrl: "./main-dashboard.component.html",
	styleUrls: ["./main-dashboard.component.sass"],
})
export class MainDashboardComponent implements OnInit {
	posts: PostModel[] = [];
	center: number = 0;

	constructor(private postService: PostService, private fileService: FileService, public dialog: MatDialog, private router: Router) {}

	ngOnInit(): void {
		this.postService.getAllPosts().subscribe(
			(Response) => {
				this.posts = Response;
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

	updateCenter(center: number, event: any) {
		let el = document.querySelectorAll("div[data-filter-selected]")[0];
		el.children[0].classList.replace("text-white", "text-gray-500");
		el.classList.remove("rounded-3xl");
		el.classList.remove("bg-red-600");
		el.removeAttribute("data-filter-selected");

		let element = event.currentTarget;
		element.children[0].classList.replace("text-gray-500", "text-white");
		element.classList.add("rounded-3xl");
		element.classList.add("bg-red-600");
		element.setAttribute("data-filter-selected", true);

		this.center = center;
	}

	getFilesFromVal(files: string) {
		return JSON.parse(files);
	}

	humanSizeReadable(size: number) {
		return this.fileService.humanFileSize(size);
	}

	downloadFile(fileUuid: string) {
		this.fileService.downloadFile(fileUuid).subscribe(
			(Response) => {
				window.open(Response.url, "_blank");
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

	deletePost(id: number) {
		this.postService.deletePost(id);
		// location.reload();
	}

	openAddPosts() {
		let dialogRef = this.dialog.open(AddPostComponent, {
			height: "auto",
			width: "800px",
			panelClass: "custom-dialog-container",
		});
	}
	openEditPost(postId: number) {
		let dialogRef = this.dialog.open(EditPostComponent, {
			height: "auto",
			width: "800px",
			panelClass: "custom-dialog-container",
		});
		dialogRef.componentInstance.postId = postId;
	}

	getPostFileIcon(fileName: string) {
		let extension = fileName.split(".").pop();
		return extension;
	}

	getLoggedUser() {
		let loggedUser = JSON.parse(localStorage.getItem("userData")!)[0];
		return loggedUser;
	}
}
