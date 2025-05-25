import { listaFilmes, Filmes, Series } from "../model/fimes.model.js";

// Listar todos
function listarFilmes(req, res) {
  res.json(listaFilmes);
}

// Adicionar novo filme/série
function adicionarFilme(req, res) {
  const { nome, tipo, autor, data, descricao } = req.body;

    // Validações
  if (!nome || !tipo || !autor || !data) {
    return res.status(400).json({ mensagem: "Nome, tipo, autor e data são obrigatórios!" });
  }
  tipo = tipo.toLowerCase();
  if (tipo !== "filme" && tipo !== "serie") {
    return res.status(400).json({ mensagem: "Tipo deve ser 'filme' ou 'serie'" });
  }
  
// padroniza o tipo para a primeira letra maiúscula
  const tipoFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1);

  // gera os proximos IDs automaticamente
  const novoId = listaFilmes.length > 0 ? listaFilmes[listaFilmes.length - 1].id + 1 : 1;
  const novoItem = tipo === "filme"
    ? new Filmes(novoId, tipoFormatado, nome, autor, data, descricao)
    : new Series(novoId, tipoFormatado, nome, autor, data, descricao);

  listaFilmes.push(novoItem);
  res.status(201).json({ mensagem: "Adicionado com sucesso!", item: novoItem });
}

// Filtrar por tipo
function filtrarFilmes(req, res) {
  const { tipo } = req.query;
  if (tipo) {
    const filtrados = listaFilmes.filter(item => item.tipo.toLowerCase() === tipo.toLowerCase());
    return res.status(200).json(filtrados);
  }
  res.status(200).json(listaFilmes);
}

// Editar filme/série
function editarFilme(req, res) {
  const { id } = req.params;
  const { nome, tipo, autor, data, descricao } = req.body;
  const filme = listaFilmes.find(f => f.id === Number(id));
  if (!filme) {
    return res.status(404).json({ mensagem: "Filme ou série não encontrado!" });
  }
  if (nome) filme.nome = nome;
  if (tipo) filme.tipo = tipo;
  if (autor) filme.autor = autor;
  if (data) filme.data = data;
  if (descricao) filme.descricao = descricao;
  res.status(200).json({ mensagem: "Filme ou série atualizado com sucesso!", item: filme });
}

// deletar filme/série
function deletarFilme(req, res) {
  const { id } = req.params;
  const indice = listaFilmes.findIndex(f => f.id === Number(id));
  if (indice === -1) {
    return res.status(404).json({ mensagem: "Filme ou série não encontrado!" });
  }
  listaFilmes.splice(indice, 1);
  res.status(200).json({ mensagem: "Filme ou série deletado com sucesso!" });
}



export { listarFilmes, adicionarFilme, filtrarFilmes, editarFilme, deletarFilme };