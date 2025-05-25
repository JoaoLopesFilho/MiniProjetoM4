import express from "express";
import { listarFilmes, adicionarFilme, filtrarFilmes, editarFilme, deletarFilme } from "../controller/filmes.controller.js";

const router = express.Router();

router.get("/", listarFilmes);
router.get("/filtrar", filtrarFilmes);
router.post("/", adicionarFilme);
router.put("/:id", editarFilme);
router.delete("/:id", deletarFilme);

export default router;