const database = require("../DataBase/bancodedados");

const deleteAccount = (req, res) => {
  const { numeroConta } = req.params;

  database.contas = database.contas.filter((client) => {
    return client.numero !== Number(numeroConta);
  });

  return res.status(201).json({ mensagem: "Conta Deletada com Sucesso!!!" });
};

module.exports = deleteAccount;
