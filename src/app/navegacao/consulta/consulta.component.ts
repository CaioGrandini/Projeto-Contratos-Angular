import { Component } from '@angular/core';
import { consulta } from './consulta';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultaServices } from './consultaServices';

@Component({
  selector: 'app-consulta',
  templateUrl:'./consulta.component.html',
  styles: [
  ]
})
export class ConsultaComponent {

  public form: FormGroup
  public consultas: consulta[]

  constructor(
    private fb: FormBuilder,
    private rest : ConsultaServices){}

  ngOnInit(){
    this.form = this.fb.group({
      cpf: ['',[Validators.required]]
    });
  }

   pesquisarCpf(){
     this.rest.ObterPorCpf(this.form.value.cpf).subscribe((response)=>{
      this.consultas = response
     },
     (error) => {
      console.error('Erro ao obter os dados do backend:', error);
     });
     
   }
}
