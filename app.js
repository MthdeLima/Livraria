import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexao')); // Se conexao falhar, erro.
db.once("open", () => {              //Testando conexao e retornando mensagem se der certo.
    console.log("Conexao com o banco feita com sucesso");
})

const app = express(); //instanciando o express
routes(app); //passando o aquivo Routes para as rotas serem direcionadas
app.use(express.json()); 

export default app