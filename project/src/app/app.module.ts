import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HeaderComponent } from './appointments/header/header.component';
import { SideMenuComponent } from './appointments/side-menu/side-menu.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AppointmentsComponent,
    HeaderComponent,
    SideMenuComponent,
    AppointmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
