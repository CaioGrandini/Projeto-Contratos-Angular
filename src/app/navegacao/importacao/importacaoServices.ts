import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { importacao } from "./importacao";
import { Observable } from "rxjs";
import { BaseService } from "../user/baseService";

@Injectable({
    providedIn: 'root'
  })

export class ImportService extends BaseService{

    constructor(private http: HttpClient) { super() }

    urlV3 = 'https://localhost:7082/api/contratos/arquivos';
 
    ObterCsvUsuario(): Observable<importacao[]>{
        return this.http
                .get<importacao[]>(this.urlV3, super.ObterAuthHeaderJson());
       }
}