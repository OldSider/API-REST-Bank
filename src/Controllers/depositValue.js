const database = require("../DataBase/bancodedados");

const depositValue = (req, res) => {
  const { numero_conta, valor } = req.body;

  const conta = database.contas.find((client) => {
    return client.numero === Number(numero_conta);
  });

  if (!conta) {
    return res
      .status(404)
      .json({ mensagem: "Número da conta não encontrado." });
  }

  const deposit = {
    date: new Date().toDateString(),
    numero_conta: numero_conta,
    valor: valor,
  };

  conta.saldo += valor;

  database.depositos.push(deposit);



  return res.status(201).json({ mensagem: "Depósito feito com sucesso!!!" });
};

module.exports = depositValue;
