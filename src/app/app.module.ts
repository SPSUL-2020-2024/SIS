import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuOverlayComponent } from './Components/overlay/menu-overlay/menu-overlay.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { TopOverlayComponent } from './Components/overlay/top-overlay/top-overlay.component';
import { AllUsersComponent } from './Components/Users/all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuOverlayComponent,
    MainDashboardComponent,
    TopOverlayComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
