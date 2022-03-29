import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './Components/users/users.component';
import { UserFilterPipe } from './pipes/user-filter.pipe';



@NgModule({
  declarations: [
    UsersComponent,
    UserFilterPipe
  ],
  exports: [
    UserFilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
