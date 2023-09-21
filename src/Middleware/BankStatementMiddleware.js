const database = require("../DataBase/bancodedados");

const bankStatementMiddleware = (req, res, next) => {
  const { numero_conta, senha } = req.query;

  const requiredFields = ["numero_conta", "senha"];

  for (const field of requiredFields) {
    if (!req.query[field]) {
      return res
        .status(400)
        .json({ mensagem: `O campo '${field}' é obrigatório!` });
    }
  }

  const clientAccount = database.contas.find(
    (conta) => conta.numero === Number(numero_conta)
  );
  if (!clientAccount) {
    res.status(400).json({ mensagem: "Conta não encontrada" });
    return;
  }

  if (clientAccount.usuario.senha !== senha) {
    return res.status(400).json({ mensagem: "Senha inválida." });
  }
  next();
};

module.exports = bankStatementMiddleware;
