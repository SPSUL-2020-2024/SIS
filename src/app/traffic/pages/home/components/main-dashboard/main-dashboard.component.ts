import { Router } from "@angular/router";
import { FileService } from "./../../../../services/file/file.service";
import { MimeService } from "./../../../../../core/services/mime/mime.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { PostService } from "../../../../services/post/post.service";
import { MatDialog } from "@angular/material/dialog";
import { AddPostComponent } from "../add-post/add-post.component";

@Component({
	selector: "app-main-dashboard",
	templateUrl: "./main-dashboard.component.html",
	styleUrls: ["./main-dashboard.component.sass"],
})
export class MainDashboardComponent implements OnInit {
	polePrispevku: any[] = [];

	constructor(private postService: PostService, private fileService: FileService, public dialog: MatDialog, private router: Router) {}

	ngOnInit(): void {
		this.postService.getAllPosts().subscribe(
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

	getPostFileIcon(fileName: string) {
		let extension = fileName.split(".").pop();
		return extension;
	}
}
