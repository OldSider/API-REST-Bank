const database = require("../DataBase/bancodedados");

const transferValue = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  const contaOrigin = database.contas.find(
    (conta) => conta.numero === Number(numero_conta_origem)
  );

  const contaDestiny = database.contas.find(
    (conta) => conta.numero === Number(numero_conta_destino)
  );

  contaOrigin.saldo -= valor;
  contaDestiny.saldo += valor;

  const newTransfer = {
    numero_conta_origem,
    numero_conta_destino,
    valor,
  };

  database.transferencias.push(newTransfer);

  return res
    .status(200)
    .json({ mensagem: "Tranferencia Efetuada com Sucesso!!!" });
};

module.exports = transferValue;
