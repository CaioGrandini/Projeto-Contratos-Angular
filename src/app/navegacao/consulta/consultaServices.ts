import { Injectable } from "@angular/core";
import { BaseService } from "../user/baseService";
import { HttpClient } from "@angular/common/http";
import { consulta } from "./consulta";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

  export class ConsultaServices extends BaseService{

constructor(private http: HttpClient) { super() }

urlV4 = 'https://localhost:7082/api/contratos/';

ObterPorCpf(cpf: string): Observable<consulta[]>{
    return this.http
            .get<consulta[]>(this.urlV4 + cpf, super.ObterAuthHeaderJson());
   }
}