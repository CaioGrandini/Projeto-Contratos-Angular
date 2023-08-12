import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { blackListServices } from './black-list.service';
import { Produto } from './produto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-black-list',
  templateUrl: './black-list.component.html',
  styleUrls: ['./black-list.component.css']
})

export class BlackListComponent  implements OnInit{

  public form : FormGroup;
  public groupSearch : FormGroup;
  public produtos: Produto[];
  //private rest: blackListServices;
  request: boolean;

constructor(
  private blackListServices : blackListServices,
  private rest: blackListServices,
  private fb : FormBuilder,
  private _router: Router){   }


ngOnInit() {
  this.form = this.fb.group({
    ip: ['', [Validators.required]],
    description: ['',[Validators.required]],
  });

  this.blackListServices.obterProdutos()
  .subscribe({
    next: produtos => {
      this.produtos = produtos;
      console.log(produtos);
  },error : e => console.error(e)
    });

  //this.blackListServices.obterPorIP(this.form.value.ip).subscribe({ });

}

  createRow(){
console.log('teste')
this.rest.postProduto(this.form.value).subscribe(result => {  });
this.form.reset();
  }

  
  searchRow(){
    this.rest.obterPorIP(this.form.value.ip).subscribe(result => {
      this._router.navigate(['/blacklist/update/' + result.id])
      console.log(result)
    });
  }

  deleteRow(){
    this.rest.deletePorIp(this.form.value.ip).subscribe(result =>{ });
    console.log("teste deletes")
  }
}