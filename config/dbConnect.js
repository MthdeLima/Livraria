import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mthdelima:123@bdlivraria.cakwueh.mongodb.net/BDLivraria");

let db = mongoose.connection;

export default db;