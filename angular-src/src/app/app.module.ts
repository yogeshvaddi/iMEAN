import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router, CanActivate } from '@angular/router';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ValidateService } from './validate.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './parent/parent.component';
import { FocusDirective } from './focus.directive';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      { 
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("158513161479572")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("801051281287-poo269k27gqcnu7ahvb04dvtcuh17lqc.apps.googleusercontent.com")
        // For local Devleopment  //("1063753676478-8cq0p81622qbev2as9r9j6kjmdrbjc59.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    HomeComponent,
    ParentComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpModule, RouterModule.forRoot(appRoutes), FlashMessagesModule, SocialLoginModule
  ],
  providers: [ValidateService, FlashMessagesService, DataService, AuthGuard, {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
