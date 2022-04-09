import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuOverlayComponent } from './Components/overlay/menu-overlay/menu-overlay.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { TopOverlayComponent } from './Components/overlay/top-overlay/top-overlay.component';
import { AllUsersComponent } from './Components/Users/Components/all-users/all-users.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {UsersModule} from "./Components/Users/users.module";
import {FormsModule} from "@angular/forms";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuOverlayComponent,
    MainDashboardComponent,
    TopOverlayComponent,
    AllUsersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    FormsModule,
    BrowserAnimationsModule,
    NzEmptyModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
