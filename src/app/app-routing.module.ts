import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//components
import { MainDashboardComponent } from "./traffic/pages/home/components/main-dashboard/main-dashboard.component";
import { AllUsersComponent } from "./traffic/pages/users/components/all-users/all-users.component";
import { NotFoundComponent } from "./core/components/errors/not-found/not-found.component";
import { IssuesComponent } from "./traffic/pages/issues/issues.component";
import { FilesComponent } from "./traffic/pages/files/files.component";
import { LoginPageComponent } from "./traffic/pages/login-page/login-page.component";
import { AuthGuard } from "./core/guards/auth/auth.guard";

const routes: Routes = [
	{ path: "login", component: LoginPageComponent },
	{ path: "", component: MainDashboardComponent, canActivate: [AuthGuard] },
	{ path: "profile", component: NotFoundComponent, canActivate: [AuthGuard] },
	{ path: "users", component: AllUsersComponent, canActivate: [AuthGuard], data: { required_role: 3 } },
	{ path: "settings", component: NotFoundComponent, canActivate: [AuthGuard] },
	{ path: "issues", component: IssuesComponent, canActivate: [AuthGuard] },
	{ path: "files", component: FilesComponent, canActivate: [AuthGuard] },
	{ path: "**", component: NotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
