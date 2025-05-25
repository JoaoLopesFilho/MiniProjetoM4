import express from "express";
import { listarFilmes, adicionarFilme, filtrarFilmes, editarFilme, deletarFilme } from "../controller/filmes.controller.js";

const router = express.Router();

router.get("/", listarFilmes);
router.get("/filtrar", filtrarFilmes);
router.post("/adicionar", adicionarFilme);
router.put("/edit", editarFilme);
router.delete("/delet", deletarFilme);

export default router;