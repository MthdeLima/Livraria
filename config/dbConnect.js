import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mth:123@livraria-node.avtj8g7.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;