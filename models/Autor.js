import mongoose, { Mongoose } from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("autores", autorSchema);

export default autores;