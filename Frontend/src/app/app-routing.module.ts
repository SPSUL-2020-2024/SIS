import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//components
import { MainDashboardComponent } from "./Components/main-dashboard/main-dashboard.component";
import { AllUsersComponent } from "./Components/Users/Components/all-users/all-users.component";
import { NotFoundComponent } from "./Components/errors/not-found/not-found.component";
import { IssuesComponent } from "./Components/issues/issues/issues.component";
import { PaymentRequiredComponent } from "./Components/errors/payment-required/payment-required.component";
import {LoginPageComponent} from "./Components/login/Components/login-page/login-page.component";
import {AuthGuard} from "./Components/login/Guard/auth.guard";

const routes: Routes = [
	{ path: "", component: MainDashboardComponent,canActivate:[AuthGuard] },
	{ path: "login", component: LoginPageComponent },
	{ path: "profile", component: NotFoundComponent,canActivate:[AuthGuard]  },
	{ path: "users", component: AllUsersComponent,canActivate:[AuthGuard]  },
	{ path: "settings", component: NotFoundComponent,canActivate:[AuthGuard]  },
	{ path: "issues", component: IssuesComponent,canActivate:[AuthGuard]  },
	{ path: "payment_required", component: PaymentRequiredComponent,canActivate:[AuthGuard]  },
	{ path: "**", component: NotFoundComponent,canActivate:[AuthGuard]  },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
