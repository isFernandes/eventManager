import { createConnection } from "typeorm";

createConnection()
  .then(() => {
    console.log("Conexão com base de dados: OK!");
  })
  .catch((err) => {
    console.log("Ocorreu um erro: ");
    console.log(err);
  });
