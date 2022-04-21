import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './Components/files/files.component';
import {MainDashboardComponent} from "./Components/main-dashboard/main-dashboard.component";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import { AddPostComponent } from './Components/add-post/add-post.component';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";



@NgModule({
  declarations: [
    FilesComponent,
    MainDashboardComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    NzEmptyModule,
    NzDrawerModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule
  ]
})
export class PostsModule { }
