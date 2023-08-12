import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroClients } from './registro';
import { registroServices } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html' 
})

export class RegistroComponent {

  public formRegister : FormGroup 
  public registros: RegistroClients[];

  constructor(
    private registroServices: registroServices,
    private fb : FormBuilder){   }


    ngOnInit() {
      this.formRegister = this.fb.group({
        portal: ['', [Validators.required]],
        user: ['',[Validators.required]],
        password: ['',[Validators.required]],
      });
    
      this.registroServices.obterClientes()
      .subscribe({
        next: registros => {
          this.registros = registros;
          console.log(registros);
      },error : e => console.error(e)
        });    
        
    }

    createRegister(){
      console.log('teste')
      this.registroServices.postClients(this.formRegister.value).subscribe(result => {  });
      this.formRegister.reset();
    }

}
