import express from "express";
import livros from "./LivrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Livraria Grimm')
    })
    
    app.use(
        express.json(),
        autores,
        livros  
    )
}

export default routes
