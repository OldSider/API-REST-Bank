const database = require("../DataBase/bancodedados");

const WithdrawValue = (req, res) => {
  const { numero_conta, valor, senha } = req.body;

  const client = database.contas.find((client) => {
    return client.numero === Number(numero_conta);
  });

  client.saldo -= valor;

  const withdraw = {
    numero_conta,
    valor,
    data: new Date().toDateString(),
  };

  database.saques.push(withdraw);

  return res.status(200).json({ mensagem: "Saldo Retirado com Sucesso!!!" });
};

module.exports = WithdrawValue;
