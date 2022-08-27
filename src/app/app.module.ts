import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { NzEmptyModule } from "ng-zorro-antd/empty";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { CommonModule, registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { UsersModule } from "./modules/users/users.module";
import { ErrorsModule } from "./core/components/errors/errors.module";
import { LoginModule } from "./modules/login/login.module";
import { OverlayModule } from "./core/components/overlay/overlay.module";
import { PostsModule } from "./modules/posts/posts.module";
import { IssuesModule } from "./modules/issues/issues.module";
import { AuthGuard } from "./core/guards/auth.guard";
import { TokenInterceptor } from "./modules/login/interceptor/token.interceptor";

registerLocaleData(en);

@NgModule({
	declarations: [AppComponent],
	imports: [CommonModule, BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, UsersModule, ErrorsModule, LoginModule, OverlayModule, PostsModule, ErrorsModule, IssuesModule, NzEmptyModule],
	providers: [
		{ provide: NZ_I18N, useValue: en_US },
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
