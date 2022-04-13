import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from "./not-found/not-found.component";
import {PaymentRequiredComponent} from "./payment-required/payment-required.component";



@NgModule({
  declarations: [
    NotFoundComponent,
    PaymentRequiredComponent],
  exports: [
    NotFoundComponent,
    PaymentRequiredComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorsModule { }
