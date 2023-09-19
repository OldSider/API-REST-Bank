const database = require("../DataBase/bancodedados");

const RegisterClientMiddleware = (req, res, next) => {
  const { cpf, email } = req.body;

  const validationEmail = database.contas.some(
    (client) => client.usuario.email === email
  );
  const validationCpf = database.contas.some(
    (client) => client.usuario.cpf === cpf
  );

  if (validationEmail) {
    return res
      .status(400)
      .json({ mensagem: "Email já cadastrado. Escolha outro Email!!!" });
  }
  if (validationCpf) {
    return res
      .status(400)
      .json({ mensagem: "CPF já cadastrado. Escolha outro CPF!" });
  }

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

  next();
};

module.exports = RegisterClientMiddleware;
