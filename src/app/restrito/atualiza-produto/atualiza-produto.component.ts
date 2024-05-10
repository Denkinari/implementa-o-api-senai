import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit{
  public produtoId: number = 0;
  public produto: Produto = new Produto(0, "", "", "", "");

  constructor(private _produtoService: ProdutoService, private _router: Router, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => this.produtoId = params['id']);
  }

  listarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (response: any) => {
        this.produto = new Produto(
          response[0].id,
          response[0].nome,
          response[0].descricao,
          response[0].foto,
          response[0].preco


        );
      }
    )
  }

  atualizarProduto(id:number){
    this._produtoService.atualizarProduto(id, this.produto).subscribe(

      produto => {
        if(window.confirm("Confirmar atualização dos dados?")){
        this.produto = new Produto(0, "", "", "", "")
        alert("Dados atualizados");
        this._router.navigate(["restrito/lista"]);
        }
      },
        err => alert("Erro ao atualizar")
    );


  }

  ngOnInit(): void {
    this.listarProduto();
  }

}
