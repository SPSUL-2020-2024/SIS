import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//components
import { MainDashboardComponent } from "./Components/Posts/Components/main-dashboard/main-dashboard.component";
import { AllUsersComponent } from "./Components/Users/Components/all-users/all-users.component";
import { NotFoundComponent } from "./Components/errors/not-found/not-found.component";
import { IssuesComponent } from "./Components/issues/issues/issues.component";
import { PaymentRequiredComponent } from "./Components/errors/payment-required/payment-required.component";
import {FilesComponent} from "./Components/Posts/Components/files/files.component";
import {LoginPageComponent} from "./Components/login/Components/login-page/login-page.component";
import {AuthGuard} from "./Components/login/Guard/auth.guard";

const routes: Routes = [
  { path: "login", component: LoginPageComponent },
	{ path: "", component: MainDashboardComponent, canActivate: [AuthGuard] },
	{ path: "profile", component: NotFoundComponent,canActivate: [AuthGuard] },
	{ path: "users", component: AllUsersComponent, canActivate: [AuthGuard], data: {"required_role" : 3}},
	{ path: "settings", component: NotFoundComponent, canActivate: [AuthGuard] },
	{ path: "issues", component: IssuesComponent, canActivate: [AuthGuard] },
	{ path: "files", component: FilesComponent, canActivate: [AuthGuard] },
	{ path: "payment_required", component: PaymentRequiredComponent},
	{ path: "**", component: NotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
