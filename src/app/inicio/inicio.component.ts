import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private _produtoService: ProdutoService) {

  }

  ngOnInit(): void {

    this.listarProdutos();

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
        console.log(this.produtos);
      }
    );
  }




}
