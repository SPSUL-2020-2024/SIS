import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//components
import { MainDashboardComponent } from "./Components/main-dashboard/main-dashboard.component";
import { AllUsersComponent } from "./Components/Users/Components/all-users/all-users.component";
import { NotFoundComponent } from "./Components/errors/not-found/not-found.component";
import { IssuesComponent } from "./Components/issues/issues/issues.component";
import { PaymentRequiredComponent } from "./Components/errors/payment-required/payment-required.component";

const routes: Routes = [
	{ path: "", component: MainDashboardComponent },
	{ path: "profile", component: NotFoundComponent },
	{ path: "users", component: AllUsersComponent },
	{ path: "settings", component: NotFoundComponent },
	{ path: "issues", component: IssuesComponent },
	{ path: "payment_required", component: PaymentRequiredComponent },
	{ path: "**", component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
