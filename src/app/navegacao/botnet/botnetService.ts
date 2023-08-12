import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BaseService } from '../user/baseService';
import { Produto } from "../black-list/produto";

@Injectable()

export class botnetService extends BaseService {

    constructor(private http: HttpClient) { super() }

    protected UrlServicesBotnet: string = "https://localhost:7257/";

    botnet() : Observable<Produto[]>{
        return this.http
        .get<Produto[]>(this.UrlServicesBotnet + "api/v1/" + "registers/all", super.ObterAuthHeaderJson());
    }

}