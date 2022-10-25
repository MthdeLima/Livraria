import express from "express";
import app from "../app.js";
import livros from "./LivrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Livraria Grimm')
    })
    
    app.use(
        express.json(),
        livros
    )
}

export default routes;
