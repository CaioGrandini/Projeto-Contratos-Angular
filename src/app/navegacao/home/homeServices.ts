
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../user/baseService';
import { Contrato } from './contrato';

@Injectable({
  providedIn: 'root'
})
export class CsvImportService extends BaseService{

  constructor(private http: HttpClient) { super() }

  urlV2 = 'https://localhost:7082/api/contratos/';

  uploadCsvFile(formData: FormData): Observable<any> {
    const url = 'https://localhost:7082/api/contratos/csv';
    return this.http.post(url, formData, { withCredentials: false });
 }

 ObterBase(): Observable<Contrato[]>{
  return this.http
          .get<Contrato[]>(this.urlV2, super.ObterAuthHeaderJson());
 }
}