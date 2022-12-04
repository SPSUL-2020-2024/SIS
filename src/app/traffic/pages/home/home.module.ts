import { FilesModule } from "./../../../core/components/files/files.module";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzFormModule } from "ng-zorro-antd/form";
import { PostFilterPipe } from "./../../pipes/post-filter/post-filter.pipe";
import { OverlayModule } from "./../../../core/components/overlay/overlay.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainDashboardComponent } from "./components/main-dashboard/main-dashboard.component";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { MatMenuModule } from "@angular/material/menu";
import { EditPostComponent } from "./components/edit-post/edit-post.component";
import { FormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
	declarations: [MainDashboardComponent, PostFilterPipe, EditPostComponent],
	imports: [FilesModule, EditorModule, CommonModule, NzEmptyModule, OverlayModule, FormsModule, MatDialogModule, MatMenuModule, NzFormModule, NzSelectModule],
})
export class HomeModule {}
