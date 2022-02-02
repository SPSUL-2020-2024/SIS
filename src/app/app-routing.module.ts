import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainDashboardComponent} from "./Components/main-dashboard/main-dashboard.component";

const routes: Routes = [
  {path: '', component: MainDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
