const database = require("../DataBase/bancodedados");

const WithdrawValueMiddleware = (req, res, next) => {
  const { numero_conta, valor, senha } = req.body;

  const client = database.contas.find((client) => {
    return client.numero === Number(numero_conta);
  });

  const requiredFields = ["numero_conta", "valor", "senha"];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json({ mensagem: `O campo '${field}' é obrigatório!` });
    }
  }

  if (valor <= 0) {
    return res.status(401).json({ mensagem: "Valor Invalido!!!" });
  }

  if (!client) {
    return res
      .status(401)
      .json({ error: "O Número da Conta Não foi Encontrado!!!" });
  }

  if (client.usuario.senha !== senha) {
    return res.status(401).json({ mensagem: "Senha Incorreta!!!" });
  }

  if (client.saldo < valor) {
    return res.status(401).json({ mensagem: "Saldo Indisponivel!!!" });
  }

  next();
};

module.exports = WithdrawValueMiddleware;
