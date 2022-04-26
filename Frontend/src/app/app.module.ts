import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MainDashboardComponent } from './Components/Posts/Components/main-dashboard/main-dashboard.component';


import {UsersModule} from "./Components/Users/users.module";
import {ErrorsModule} from "./Components/errors/errors.module";
import {LoginModule} from "./Components/login/login.module";
import {OverlayModule} from "./Components/overlay/overlay.module";
import {PostsModule} from "./Components/Posts/posts.module";
import {IssuesModule} from "./Components/issues/issues.module";
import {AuthGuard} from "./Components/login/Guard/auth.guard";
import {TokenInterceptor} from "./Components/login/Interceptor/token.interceptor";
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {MatSnackBarModule} from "@angular/material/snack-bar";


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    UsersModule,
    ErrorsModule,
    LoginModule,
    OverlayModule,
    PostsModule,
    ErrorsModule,
    IssuesModule,
    NzEmptyModule,
    NzDrawerModule,
    MatSnackBarModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
