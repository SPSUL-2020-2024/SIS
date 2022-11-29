import { FilesModule } from "./../core/components/files/files.module";
import { OverlayModule } from "./../core/components/overlay/overlay.module";
import { IssuesComponent } from "./pages/issues/issues.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AllUsersComponent } from "./pages/users/components/all-users/all-users.component";
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
import { AddUserComponent } from "./pages/users/components/add-user/add-user.component";
import { EditUserComponent } from "./pages/users/components/edit-user/edit-user.component";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
	declarations: [AddPostComponent, FilesComponent, LoginPageComponent, IssuesComponent, AllUsersComponent, UserFilterPipe, AddUserComponent, EditUserComponent],
	imports: [FilesModule, OverlayModule, HomeModule, CommonModule, NzEmptyModule, NzDrawerModule, FormsModule, NzFormModule, NzInputModule, NzSelectModule, MatMenuModule, NzDatePickerModule, MatDialogModule, NzIconModule, EditorModule, MatSnackBarModule],
	exports: [LoginPageComponent, UserFilterPipe, AllUsersComponent],
})
export class TrafficModule {}
