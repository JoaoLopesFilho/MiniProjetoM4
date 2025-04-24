

class Filmes{
    constructor (id,tipo,nome,autor,data,descrição){
        this.id=id;
        this.tipo=tipo;
        this.nome=nome;
        this.autor=autor;
        this.data=data;
        this.descrição=descrição;
    }


     showFilmes(){
        return `id:${this.id}, tipo:${this.tipo}, nome: ${this.nome}, autor: ${this.autor}, data: ${this.data}, descrição: ${this.descrição}`;

     }

};

const listaFilmes=[
    new Filmes(1,"Filme","Pantera Negra","Ryan Coogler e Joe Robert Cole",2018,"Após a morte do rei T'Chaka, seu filho T'Challa retorna à nação africana de Wakanda para assumir o trono. No entanto, ele enfrenta desafios internos e externos que testam sua liderança e o destino de seu povo."),
    new Filmes(2,"Filme","A Voz Suprema do Blues"," August Wilson",2020," O filme acompanha a relação complexa entre Rainey e Levee, um talentoso e inovador trompetista, enquanto eles se preparam para gravar no estúdio."),
    new Filmes(3,"Filme","estrelas Além do Tempo","Theodore Melfi",2016,"No auge da corrida espacial travada entre Estados Unidos e União Soviética durante a Guerra Fria, uma equipe de cientistas da Nasa formada exclusivamente por mulheres afro-americanas provou ser o elemento crucial que faltava na equação para a vitória dos Estados Unidos, liderando uma das maiores operações tecnológicas registradas na história norte-americana."),
    new Filmes(4,"Filme","O Menino que Descobriu o Vento"," William Kamkwamba, Bryan Mealer",2019,"Baseado em uma história real, mostra um jovem do Malaui que transforma sua vila com energia sustentável."),
    new Filmes(5,"Filme","Tudo em Todo Lugar ao Mesmo Tempo"," Daniel Scheinert, Daniel Kwan",2022,"Uma ruptura interdimensional bagunça a realidade e uma inesperada heroína precisa usar seus novos poderes para lutar contra os perigos bizarros do multiverso."),
    new Filmes(6,"Serie","Daybreak","Brian Ralph",2019,"Um garoto procura sua amada em uma Los Angeles tomada por zumbis e gangues."),
    new Filmes(6,"Serie","Samurai de Olhos Azuis"," Amber Noizumi, Michael Green",2023,"Movida pelo sonho de vingança contra as pessoas que a transformaram em uma excluída no Japão do período Edo, uma jovem guerreira decide trilhar um caminho sangrento."),
    new Filmes(7,"Serie","Hora de Aventura"," Pendleton Ward",2010,"Finn vive grandes aventuras na terra de Ooo na companhia de seu melhor amigo, Jake. De viagens a reinos alucinantes a lutas contra vampiros, os dois estão prontos para enfrentar qualquer perigo."),
    new Filmes(8,"Serie","Sex Education","Laurie Nunn, Richard Gadd, Rosie Jones,",2019,"O inexperiente Otis entede tudo de aconselhamento sexual, graças à sua mãe sexóloga. Ele se junta com a rebelde Maeve para abrir uma clínica de terapia sexual na escola."),
    new Filmes(9,"Serie","Heartstopper"," Alice Oseman","Os adolescentes Charlie e Nick descobrem que são mais que apenas amigos e precisam lidar com as dificuldades da vida escolar e amorosa."),
    new Filmes(10,"Serie","A Família Mitchell e a Revolta das Máquinas"," Mike Rianda",2021,"Uma adolescente embarca em uma viagem com seus orgulhosos pais, irmão mais novo e cachorro amado para começar seu primeiro ano na faculdade. Mas seus planos de se unir como uma família logo são interrompidos quando os dispositivos eletrônicos do mundo se revoltam e rapidamente organizam um apocalipse robô."),
    new Filmes(11,"Serie","Steven Universe","Rebeca Sugar",2013,"Quando um cometa mágico vem em direção a Beach City, Steven deverá revirar a coleção de quinquilharias do seu pai para encontrar uma arma capaz de salvar a cidade."),

];

export {Filmes,listaFilmes};