import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { UserCreateComponent } from './user-create/user-create.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserFieldsComponent } from './user-fields/user-fields.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndexRedirectComponent } from './index-redirect/index-redirect.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    AboutComponent,
    NavbarComponent,
    UserFieldsComponent,
    UserLoginComponent,
    HomePageComponent,
    IndexRedirectComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
