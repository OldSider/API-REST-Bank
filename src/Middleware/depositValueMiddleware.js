const database = require("../DataBase/bancodedados");

const depositValueMiddleware = (req, res, next) => {
  const { numero_conta, valor } = req.body;

  const requiredFields = ["numero_conta", "valor"];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json({ mensagem: `O campo '${field}' é obrigatório!` });
    }
  }

  const client = database.contas.find((client) => {
    return client.numero === Number(numero_conta);
  });

  if (!client) {
    return res
      .status(401)
      .json({ error: "O Número da Conta Não foi Encontrado!!!" });
  }

  if (valor <= 0) {
    return res.status(400).json({ mensagem: "Valor Inválido" });
  }

  next();
};

module.exports = depositValueMiddleware;
