const database = require("../DataBase/bancodedados");

const getBankStatement = (req, res) => {
  const { numero_conta } = req.query;

  const statement = {
    depositos: database.depositos.filter(
      (deposit) => deposit.numero_conta === numero_conta
    ),
    saques: database.saques.filter(
      (withdraw) => withdraw.numero_conta === numero_conta
    ),
    transferenciasEnviadas: database.transferencias.filter(
      (shippedTransfer) => shippedTransfer.numero_conta_origem === numero_conta
    ),
    transferenciasRecebidas: database.transferencias.filter(
      (ReceivedTransfer) =>
        ReceivedTransfer.numero_conta_destino === numero_conta
    ),
  };

  console.log(database.depositos);

  return res.status(200).json(statement);
};

module.exports = getBankStatement;
