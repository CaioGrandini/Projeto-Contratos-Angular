import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { BlackListComponent } from './navegacao/black-list/black-list.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { rootRouterConfig } from './app.routes';
import { RegistroComponent } from './navegacao/registro/registro.component';
import { blackListServices } from './navegacao/black-list/black-list.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { registroServices } from './navegacao/registro/registro.service';
import { UserLoginComponent } from './navegacao/user/user-login/user-login.component';
import { UserRegisterComponent } from './navegacao/user/user-register/user-register.component';
import { UserService } from './navegacao/user/userServices';
import { MenuUserComponent } from './navegacao/user/menu/menu.user.component';
import { BotnetComponent } from './navegacao/botnet/botnet.component';
import { botnetService } from './navegacao/botnet/botnetService';





@NgModule({
  declarations: [
    AppComponent,
    BlackListComponent,
    MenuComponent,
    RegistroComponent,
    UserLoginComponent,
    UserRegisterComponent,
    MenuUserComponent,
    BotnetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    blackListServices,
    registroServices,
    UserService,
    botnetService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
