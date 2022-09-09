import { UploadFilesComponent } from "./components/upload-files/upload-files.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
	declarations: [UploadFilesComponent],
	imports: [CommonModule, MatProgressBarModule],
	exports: [UploadFilesComponent],
})
export class FilesModule {}
