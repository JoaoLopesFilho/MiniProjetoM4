import express from "express";
import filmesRoutes from "../src/routes/filmes.routes.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/filmes", filmesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});


