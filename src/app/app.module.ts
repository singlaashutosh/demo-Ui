import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthUserhomeComponent } from './auth-userhome/auth-userhome.component';
import { AuthContactusComponent } from './auth-contactus/auth-contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    AuthHomeComponent,
    AuthUserhomeComponent,
    AuthContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
