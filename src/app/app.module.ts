import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import { MenuComponent } from './navegacao/menu/menu.component';
import { rootRouterConfig } from './app.routes';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { UserLoginComponent } from './navegacao/user/user-login/user-login.component';
import { UserRegisterComponent } from './navegacao/user/user-register/user-register.component';
import { UserService } from './navegacao/user/userServices';
import { MenuUserComponent } from './navegacao/user/menu/menu.user.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserLoginComponent,
    UserRegisterComponent,
    MenuUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    UserService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
