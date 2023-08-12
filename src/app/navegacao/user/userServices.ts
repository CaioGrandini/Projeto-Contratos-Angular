import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { User } from './user-login/user';
import { BaseService } from '../user/baseService';
import { userRegister } from "./user-register/userRegister";


@Injectable()
export class UserService extends BaseService {

    constructor(private http: HttpClient) { super() }

    login(user: User): Observable<User> {

        return this.http
            .post(this.UrlServiceV1 + 'entrar', user, super.ObterHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError)
            );
    }

    register(user: userRegister): Observable<userRegister> {

        return this.http
            .post(this.UrlServiceV1 + 'nova-conta', user, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError)
            );
    }

    persistirUserApp(response: any){
        localStorage.setItem('app.token', response.accessToken);
        localStorage.setItem('app.user', JSON.stringify(response.userToken));
    }
}