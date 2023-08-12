import { Component } from '@angular/core';
import { UserService } from '../user/userServices';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  saudacao: string;
  constructor(private userService: UserService) {  }

  userLogado(): boolean {
    var user = this.userService.obterUsuario();
    if (user) {
      this.saudacao = "Olá " + user.email;
      return true;
    }

    return false;
  }
}
