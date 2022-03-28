import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {MainDashboardComponent} from "./Components/main-dashboard/main-dashboard.component";
import {AllUsersComponent} from "./Components/Users/Components/all-users/all-users.component";
import {UsersComponent} from "./Components/Users/Components/users/users.component";

const routes: Routes = [
  {path: '', component: MainDashboardComponent},
  {path: 'profile', component: MainDashboardComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'settings', component: MainDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
