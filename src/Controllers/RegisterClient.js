const database = require("../DataBase/bancodedados");
let { newID } = require("../DataBase/bancodedados");

const newClient = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

  const newAccount = {
    numero: newID++,
    saldo: 0,
    usuario: {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    },
  };

  database.contas.push(newAccount);

  return res.status(201).json({ mensagem: "Cliente Cadastrado!!!" });
};

module.exports = newClient;
