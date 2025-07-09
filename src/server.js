import express from "express";
import cors from "cors";
import filmesRoutes from "../src/routes/filmes.routes.js";

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());
app.use('/filmes', filmesRoutes);

e
app.get('/117', (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ${PORT}');
});
Server.js