import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RegistroClients } from "./registro";
import { BaseService } from "../user/baseService";

@Injectable()

export class registroServices extends BaseService{

constructor(private http: HttpClient){ super() }

protected UrlServicesR1: string = "https://localhost:7257/";
//protected UrlServicesR1: string = "http://54.226.10.36:40/";

httpOptions = {
    headers: new HttpHeaders({
        'content-type' : 'application/json'
    })
};

obterClientes() : Observable<RegistroClients[]>{
    return this.http
    .get<RegistroClients[]>(this.UrlServicesR1 + "api/v1/" + "clients/", super.ObterAuthHeaderJson());
}

postClients(registros: RegistroClients): Observable<RegistroClients>{  
    return this.http
    .post<RegistroClients>(this.UrlServicesR1 + "api/v1/" + "clients/", registros, super.ObterAuthHeaderJson())
}

/*postClients(registros: RegistroClients): Observable<RegistroClients>{  
    return this.http
    .post<RegistroClients>(this.UrlServicesR1 + "api/v1/" + "clients/", registros, this.httpOptions, super.ObterHeaderJson())
}*/

}