import { FilesModule } from "./../core/components/files/files.module";
import { OverlayModule } from "./../core/components/overlay/overlay.module";
import { IssuesComponent } from "./pages/issues/issues.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AllUsersComponent } from "./pages/all-users/all-users.component";
import { UserFilterPipe } from "./pipes/user-filter/user-filter.pipe";
import { NzEmptyModule } from "ng-zorro-antd/empty";
import { FilesComponent } from "./pages/files/files.component";
import { AddPostComponent } from "./pages/home/components/add-post/add-post.component";

import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { MatDialogModule } from "@angular/material/dialog";
import { NzIconModule } from "ng-zorro-antd/icon";
import { EditorModule } from "@tinymce/tinymce-angular";
import { HomeModule } from "./pages/home/home.module";

@NgModule({
	declarations: [AddPostComponent, FilesComponent, LoginPageComponent, IssuesComponent, AllUsersComponent, UserFilterPipe],
	imports: [FilesModule, OverlayModule, HomeModule, CommonModule, NzEmptyModule, NzDrawerModule, FormsModule, NzFormModule, NzInputModule, NzSelectModule, NzDatePickerModule, MatDialogModule, NzIconModule, EditorModule, MatSnackBarModule],
	exports: [LoginPageComponent, UserFilterPipe, AllUsersComponent],
})
export class TrafficModule {}
