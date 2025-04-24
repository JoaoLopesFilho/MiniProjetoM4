import { Filmes, listaFilmes } from "../model/filmes.model";
app.use(express.json());

// função para mostrar todos os filmes e series 
function listafilmes (req, res) {
    res.json(listaFilmes);
}





  //função para filtar por tipo 
  app.get("/filtrarfilmes", (req, res) => {
    const { tipo } = req.query;
  
    if (tipo) {
      const filtrados = listaFilmes.filter(item => item.tipo === tipo.toLowerCase());
      return res.status(200).json(filtrados);
    }
  
    res.status(200).json(listaFilmes);
  });

  //função para adicionar um item a lista 

  app.post("/listadefilmes", (req, res) => {
    const { nome, tipo, autor, data, descricao } = req.body;
  
    // Validação dos campos obrigatórios
    if (!titulo || !tipo || !autor || !data) {
      return res.status(400).json({ mensagem: "Título, tipo, autor e data são obrigatórios!" });
    }
  
    // Verifica se o tipo é válido (filme ou série)
    if (tipo !== "filme" && tipo !== "serie") {
      return res.status(400).json({ mensagem: "Tipo deve ser 'filme' ou 'serie'" });
    }
  
    // Criar um novo item com ID automático
    const novoItem = {
      id: listaFilmes.length + 1,  
      nome,
      tipo,
      autor,
      data,
      descricao: descricao || ""  // A descrição não é obrigatória, então se não vier, coloca uma string vazia
    };
  
    // Adicionar ao catalogo
    listaFilmes.push(novoItem);
  
    res.status(201).json({
      mensagem: "Adicionado com sucesso!",
      item: novoItem
    });
  });

  export{

  }