import express from "express";
import jogosRoutes from "./routes/jogosRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/jogos", jogosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});