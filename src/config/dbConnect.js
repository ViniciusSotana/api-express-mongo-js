import mongoose from "mongoose"

const uri = process.env.STRING_CONEXAO_DB;

mongoose.connect(uri)
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
  })
  .catch((err) => {
    console.log("Erro na conexão com o MongoDB:", err);
  });

let db = mongoose.connection;

export default db;