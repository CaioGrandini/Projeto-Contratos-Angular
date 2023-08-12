import { Routes } from "@angular/router";
import { BlackListComponent } from "./navegacao/black-list/black-list.component";
import { RegistroComponent } from "./navegacao/registro/registro.component";
import { UserRegisterComponent } from "./navegacao/user/user-register/user-register.component";
import { UserLoginComponent } from "./navegacao/user/user-login/user-login.component";
import { BotnetComponent } from "./navegacao/botnet/botnet.component";




export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/entrar', pathMatch: 'full' },
    //{ path: 'home', component: HomeComponent},
    { path: 'blacklist', component: BlackListComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'nova-conta', component: UserRegisterComponent},
    { path: 'entrar', component: UserLoginComponent },
    { path: 'botnet', component: BotnetComponent }
    //{ path: 'blacklist/update/:id', component: UpdateComponent},
];