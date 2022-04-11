import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {TopOverlayComponent} from "./Components/top-overlay/top-overlay.component";
import {MenuOverlayComponent} from "./Components/menu-overlay/menu-overlay.component";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    TopOverlayComponent,
    MenuOverlayComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    TopOverlayComponent,
    MenuOverlayComponent
  ]
})
export class OverlayModule { }
