import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './issues/issues.component';



@NgModule({
  declarations: [
    IssuesComponent
  ],exports:[
    IssuesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IssuesModule { }
