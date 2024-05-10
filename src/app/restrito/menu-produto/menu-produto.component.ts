import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu-produto',
  templateUrl: './menu-produto.component.html',
  styleUrls: ['./menu-produto.component.css']
})
export class MenuProdutoComponent {
  constructor(private _loginService: LoginService, private _router: Router){}

  logout(){
    if(window.confirm("Tem certeza de que deseja sair?")){
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(["/login"]);
    }
  }
}
