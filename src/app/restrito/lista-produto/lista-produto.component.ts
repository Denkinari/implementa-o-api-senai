import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from 'src/app/produto.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService, private _loginService: LoginService) {

  }

  ngOnInit(): void {

    this.listarProdutos();
    this._loginService.setMostraMenu(false);

  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe(

      (retornaProdutos: any[]) => {
        this.produtos = retornaProdutos.map(
          item => {
            return new Produto(
              item.id,
              item.nome,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        );
        
      }
    );
  }

  delete(id:any){

    if(window.confirm("Tem certeza de que deseja excluir?")){

    this._produtoService.removerProduto(id).subscribe(


      produtos =>{ 
        this.listarProdutos()
      },
      err => {  alert("Erro ao excluir")}
    )
    
  }}


}
