import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FileService } from "src/app/traffic/services/file/file.service";
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { v4 as uuid } from "uuid";
@Component({
	selector: "app-upload-files",
	templateUrl: "./upload-files.component.html",
	styleUrls: ["./upload-files.component.sass"],
})
export class UploadFilesComponent implements OnInit {
	@Output() onUploadFilesComplete = new EventEmitter<string[]>();
	selectedFiles?: FileList;
	uploadFilesCount = 0;
	uploadedFilesName: string[] = [];
	uploadedDeferUuid: string[] = [];
	uploadedFilesCount = 0;
	currentFile?: File;
	progress = 0;
	errorMessage: string | undefined;
	maxSize = 0;
	//fileInfos?: Observable<any>;
	constructor(private FileService: FileService) {}
	selectFile(event: any): void {
		this.selectedFiles = event.target.files;
		this.upload();
	}
	upload(): void {
		//get the maximum allowed file size from the API
		this.FileService.getFileSizeLimit().subscribe(
			(event: any) => {
				this.maxSize = event.message;
				this.startUpload();
			},
			(err: any) => {
				this.maxSize = 9999999999999999; //request is sent and the API decides how to handle the file size
				this.startUpload();
			}
		);
	}
	startUpload(): any {
		if (this.selectedFiles) {
			this.progress = 0;
			this.uploadFilesCount = 0;
			this.uploadedFilesCount = 0;
			this.uploadedFilesName = [];
			let passCheck = true;
			//check if file length does not exceed limit
			for (let i = 0; i < this.selectedFiles.length; i++) {
				if (this.selectedFiles.item(i) !== null) {
					let checkFile = this.selectedFiles.item(i);
					this.uploadFilesCount++;
					if (checkFile!.size > this.maxSize) {
						passCheck = false;
						let maxSizeMb = this.maxSize / 1024 / 1024;
						this.errorMessage = checkFile!.name + ": Velikost souboru nesmí být větší než " + maxSizeMb + " MB!";
					}
				}
			}
			let uploadedFileNameArray: Array<string> = [];
			//uploading to API
			if (passCheck) {
				for (let i = 0; i < this.selectedFiles.length; i++) {
					const file: File | null = this.selectedFiles.item(i);
					if (file) {
						this.currentFile = file;
						const deferUuid = uuid();
						let uploadSpecifics = {
							deferUuid: deferUuid,
							fileAmount: this.selectedFiles.length,
						};
						let test = this.FileService.upload(this.currentFile, uploadSpecifics).subscribe(
							(event: any) => {
								if (event.type === HttpEventType.UploadProgress) {
									this.progress = Math.round((100 * event.loaded) / event.total);
									if (this.progress == 100 && !uploadedFileNameArray.includes(file!.name)) {
										uploadedFileNameArray.push(file!.name);
										this.uploadedFilesCount++;
									}
								} else if (event instanceof HttpResponse) {
									this.errorMessage = event.body.message;
								}
							},
							(err: any) => {
								console.log(err);
								this.progress = 0;
								if (err.error && err.error.message) {
									this.errorMessage = this.currentFile?.name + ": " + err.error.message;
								} else {
									this.errorMessage = this.currentFile?.name + ": Nepodařilo se nahrát soubor.";
								}
								this.currentFile = undefined;
							}
						);
						this.uploadedDeferUuid.push(deferUuid);
					}
				}
			}
			this.uploadedFilesName = uploadedFileNameArray;
			this.selectedFiles = undefined;

			this.onUploadFilesComplete.emit(this.uploadedDeferUuid);
		}
	}
	getUploadStatus() {
		if (this.uploadedFilesCount == this.uploadFilesCount && this.uploadedFilesCount != 0) {
			return "completedUpload";
		} else {
			if (this.errorMessage) {
				return "uploadError";
			} else if (this.selectedFiles) {
				return "uploading";
			} else {
				return null;
			}
		}
	}
	isUploadComplete() {
		if (this.getUploadStatus() == "completedUpload") {
			return true;
		} else {
			return false;
		}
	}
	getProgressColor() {
		if (this.currentFile == null && this.errorMessage) {
			return "#FF0000"; //red
		} else {
			if (this.currentFile && this.progress == 100) {
				return "#4ade80"; //green
			} else {
				return "#9ca3af"; //gray
			}
		}
	}
	ngOnInit(): void {}
}
