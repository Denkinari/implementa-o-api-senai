export class Produto {
    id: number = 0;
    descricao: string = "";
    nome: string = "";
    foto: string = "";
    preco: string = "0";

    constructor(id: number, nome: string, descricao: string,  foto: string, preco: string) {

        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.foto = foto;
        this.preco = preco;
    }
}