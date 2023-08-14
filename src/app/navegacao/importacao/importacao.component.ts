import { ImportService } from './importacaoServices';
import { Component } from '@angular/core';
import { importacao } from './importacao';

@Component({
  selector: 'app-importacao',
  templateUrl:'./importacao.component.html',
  styles: [
  ]
})
export class ImportacaoComponent {
public importacao: importacao[]

constructor( private ImportService: ImportService){

}

ngOnInit(){

  this.ImportService.ObterCsvUsuario()
    .subscribe({
      next: importacao => {
        this.importacao = importacao;
      }
    });
}

}
