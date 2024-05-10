import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new Subject<boolean>;

  constructor() { }

  login(usuario: string, senha: string): void {
    if (usuario == "aluno" && senha == "123456789") {
      localStorage.setItem('token', 'qwer1234');
      this.mostraMenu.next(false);
    } else {
      window.alert("Usuário ou senha incorretos");
      this.mostraMenu.next(true);
    }
  }

  setMostraMenu(valor: boolean){
    this.mostraMenu.next(valor);
  }

  getMostraMenu(){
    return this.mostraMenu.asObservable();
  }

}
