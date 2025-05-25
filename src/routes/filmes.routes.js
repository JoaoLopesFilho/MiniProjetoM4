import express from "express";
import { listarFilmes, adicionarFilme, filtrarFilmes } from "../controller/filmes.contoller.js";

const router = express.Router();

router.get("/", listarFilmes);
router.get("/filtrar", filtrarFilmes);
router.post("/", adicionarFilme);

export default router;