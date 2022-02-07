import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {MainDashboardComponent} from "./Components/main-dashboard/main-dashboard.component";
import {AllUsersComponent} from "./Components/Users/all-users/all-users.component";

const routes: Routes = [
  {path: '', component: MainDashboardComponent},
  {path: 'users', component: AllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
