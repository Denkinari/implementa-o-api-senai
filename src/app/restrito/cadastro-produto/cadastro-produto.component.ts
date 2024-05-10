import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {

  public produto:Produto = new Produto(0, "", "", "", "")
  constructor(private _produtoService: ProdutoService,private _router : Router) {};

  insert(){
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0, "", "", "", "");
        alert("Cadastrado com sucesso");
        this._router.navigate(["restrito/lista"]);
      },
      err => {
        alert("Erro ao cadastrar");
      }
    )

  }

  

}
