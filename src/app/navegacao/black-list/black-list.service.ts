
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto} from './produto';
import { BaseService } from '../user/baseService';

@Injectable()

export class blackListServices extends BaseService{ 

    constructor(private http : HttpClient){ super()}

    //protected UrlServices : string = "http://54.226.10.36:40/";
    protected UrlServices : string = "https://localhost:7257/";
    // protected ip : string;

    httpOptions = {
        headers: new HttpHeaders({
            'content-type' : 'application/json',
        })
    };

    obterProdutos() : Observable<Produto[]>{
        return this.http
        .get<Produto[]>(this.UrlServices + "api/v1/" + "registers/", super.ObterAuthHeaderJson());
    }

    botnet() : Observable<Produto[]>{
        return this.http
        .get<Produto[]>(this.UrlServices + "api/v1/" + "registers/all", super.ObterAuthHeaderJson());
    }

    postProduto(produto: Produto): Observable<Produto>{  
        return this.http
        .post<Produto>(this.UrlServices + "api/v1/" + "registers/", produto, super.ObterAuthHeaderJson())
    }

    /*postProduto(produto: Produto): Observable<Produto>{  
        return this.http
        .post<Produto>(this.UrlServices + "api/v1/" + "registers/", produto, this.httpOptions)
    }*/

    obterPorIP(ip : string) : Observable<Produto>{
        return this.http
        .get<Produto>(this.UrlServices + "api/v1/" + "registers/" + ip, super.ObterAuthHeaderJson());
    }

    deletePorIp(id: string) : Observable<Produto>{
        return this.http
        .delete<Produto>(this.UrlServices + "api/v1/" + "registers/" + id, super.ObterAuthHeaderJson());
    }

}


