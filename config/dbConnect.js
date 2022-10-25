import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mth:123@livraria-node.40qcyu7.mongodb.net/Livraria-node");

let db = mongoose.connection;

export default db;