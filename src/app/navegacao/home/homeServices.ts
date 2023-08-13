import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvImportService {

  constructor(private http: HttpClient) { }

  uploadCsvFile(formData: FormData): Observable<any> {
    const url = 'https://localhost:7082/api/contratos/csv';
    return this.http.post(url, formData, { withCredentials: false });
}
}