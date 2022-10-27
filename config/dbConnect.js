import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mthdelima:123@bdlivraria.bg9bwwu.mongodb.net/BDLivraria");

let db = mongoose.connection;

export default db;