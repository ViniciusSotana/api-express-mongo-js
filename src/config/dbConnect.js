import mongoose from "mongoose"

mongoose.connect(process.env.STRING_CONEXAO_DB)
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
  })
  .catch((err) => {
    console.log("Erro na conexão com o MongoDB:", err);
  });

let db = mongoose.connection;

export default db;