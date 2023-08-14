import { Component, OnInit } from '@angular/core';
import { CsvImportService } from './homeServices';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../user/baseService';
import { Contrato } from './contrato';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent extends BaseService{
  selectedFile: File | null = null;

  public contrato: Contrato[]

  constructor(private http: HttpClient,
    private CsvImportService: CsvImportService ) { super() }

  ngOnInit(){

    this.CsvImportService.ObterBase()
    .subscribe({
      next: contrato => {
        this.contrato = contrato;
      }
    });
  }
 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('https://localhost:7082/api/contratos/csv', formData, super.ObterHeaderFormData()).subscribe(
        response => {
          console.log('Arquivo enviado com sucesso', response);
        },
        error => {
          console.error('Erro ao enviar o arquivo', error);
        }
      );
    } 
  }
}
