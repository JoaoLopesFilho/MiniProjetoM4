

class Filmes{
    constructor (id,nome,autor,data,descrição){
        this.id=id;
        this.nome=nome;
        this.autor=autor;
        this.data=data;
        this.descrição=descrição;
    }


     showFilmes(){
        return `id:${this.id}, nome: ${this.nome}, autor: ${this.autor}, data: ${this.data}, descrição: ${this.descrição}`;

     }

};

const listaFilmes=[
    new Filmes(1,"Pantera Negra","Ryan Coogler e Joe Robert Cole","2018","Após a morte do rei T'Chaka, seu filho T'Challa retorna à nação africana de Wakanda para assumir o trono. No entanto, ele enfrenta desafios internos e externos que testam sua liderança e o destino de seu povo."),
];