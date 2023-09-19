const database = require("../DataBase/bancodedados");

const updateClient = (req, res) => {
  const { numeroConta } = req.params;
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  const index = database.contas.findIndex(
    (conta) => conta.numero === Number(numeroConta)
  );
  database.contas[index].usuario = {
    nome,
    cpf,
    data_nascimento,
    telefone,
    email,
    senha,
  };

  return res.status(201).json({ mensagem: "Dados Atualizados com Sucesso!!!" });
};

module.exports = updateClient;
