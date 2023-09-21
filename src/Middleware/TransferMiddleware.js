const database = require("../DataBase/bancodedados");

const transferMiddleware = (req, res, next) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  const requiredFields = [
    "numero_conta_origem",
    "numero_conta_destino",
    "valor",
    "senha",
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json({ mensagem: `O campo '${field}' é obrigatório!` });
    }
  }

  const clientOrigin = database.contas.find(
    (conta) => conta.numero === Number(numero_conta_origem)
  );
  if (!clientOrigin) {
    res.status(400).json({ mensagem: "Conta de origem não encontrada" });
    return;
  }

  const clientDestiny = database.contas.find(
    (conta) => conta.numero === Number(numero_conta_destino)
  );
  if (!clientDestiny) {
    res.status(400).json({ mensagem: "Conta de destino não encontrada" });
    return;
  }

  if (clientOrigin.usuario.senha !== senha) {
    res.status(400).json({ mensagem: "Senha inválida para a conta de origem" });
    return;
  }

  if (clientOrigin.saldo < parseFloat(valor)) {
    res.status(400).json({ mensagem: "Saldo insuficiente na conta de origem" });
    return;
  }

  next();
};

module.exports = transferMiddleware;
