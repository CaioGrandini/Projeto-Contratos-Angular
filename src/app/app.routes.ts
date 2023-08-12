import { Routes } from "@angular/router";
import { UserRegisterComponent } from "./navegacao/user/user-register/user-register.component";
import { UserLoginComponent } from "./navegacao/user/user-login/user-login.component";
import { HomeComponent } from "./navegacao/home/home.component";





export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/entrar', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'nova-conta', component: UserRegisterComponent},
    { path: 'entrar', component: UserLoginComponent },
];