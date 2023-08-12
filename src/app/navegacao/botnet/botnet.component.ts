import { Component } from '@angular/core';

import { Produto } from '../black-list/produto';
import { botnetService } from './botnetService';

@Component({
  selector: 'app-botnet',
  templateUrl: './botnet.component.html',
  styles: []
})

export class BotnetComponent {
  public produtos: Produto[];

constructor(private boteste: botnetService){  }
  

  ngOnInit(){


    this.boteste.botnet()
    .subscribe({
      next: produtos => {
        this.produtos = produtos;
        console.log(produtos);
    },error : e => console.error(e)
      });
  
 }

}
