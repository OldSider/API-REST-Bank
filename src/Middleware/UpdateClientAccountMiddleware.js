const database = require("../DataBase/bancodedados");

const updateClientAccountMiddleware = (req, res, next) => {
  const { cpf, email } = req.body;
  const { numeroConta } = req.params;

  const requiredFields = [
    "nome",
    "cpf",
    "data_nascimento",
    "telefone",
    "email",
    "senha",
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res
        .status(400)
        .json({ mensagem: `O campo '${field}' é obrigatório!` });
    }
  }

  const validationId = database.contas.find(
    (account) => account.numero === Number(numeroConta)
  );
  if (!validationId) {
    return res.status(404).json({ mensagem: "Conta bancária Invalida!!!" });
  }

  const validationCpf = database.contas.some(
    (account) => account.usuario.cpf === cpf
  );

  if (validationCpf) {
    return res
      .status(400)
      .json({ mensagem: "COF já cadastrado. Escolha outro CPF!!!" });
  }

  const validationEmail = database.contas.some(
    (account) => account.usuario.email === email
  );

  if (validationEmail) {
    return res
      .status(400)
      .json({ mensagem: "Email já cadastrado. Escolha outro Email!!!" });
  }

  next();
};

module.exports = updateClientAccountMiddleware;
