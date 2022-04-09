import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {MainDashboardComponent} from "./Components/main-dashboard/main-dashboard.component";
import {AllUsersComponent} from "./Components/Users/Components/all-users/all-users.component";
import {LoginPageComponent} from "./Components/login/Components/login-page/login-page.component";

const routes: Routes = [
  {path: '', component: MainDashboardComponent},
  //{path: 'profile', component: },
  {path: 'users', component: AllUsersComponent}//,
  //{path: 'settings', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
