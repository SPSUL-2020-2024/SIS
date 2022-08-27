import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFilterPipe } from "./pipes/user-filter.pipe";
import { FormsModule } from "@angular/forms";
import { AllUsersComponent } from "./Components/all-users/all-users.component";
import { NzEmptyModule } from "ng-zorro-antd/empty";

@NgModule({
	declarations: [AllUsersComponent, UserFilterPipe],
	exports: [UserFilterPipe, AllUsersComponent],
	imports: [CommonModule, FormsModule, NzEmptyModule],
})
export class UsersModule {}
