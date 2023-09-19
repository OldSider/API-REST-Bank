const database = require("../DataBase/bancodedados");

const DeleteAccountMiddleware = (req, res, next) => {
  const { numeroConta } = req.params;

  const client = database.contas.find((client) => {
    return client.numero === Number(numeroConta);
  });

  if (!client) {
    return res
      .status(401)
      .json({ error: "O Número da Conta Não foi Encontrado!!!" });
  }

  if (client.saldo > 0) {
    return res
      .status(400)
      .json({ error: "A Conta só pode ser Removida se o saldo for zero!!!" });
  }

  next();
};

module.exports = DeleteAccountMiddleware;
