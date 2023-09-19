const database = require("../DataBase/bancodedados");

const clientAccountMiddleware = (req, res, next) => {
  const passwordBank = req.query.senha_banco;

  if (!passwordBank) {
    return res.status(400).json({ error: "Senha não Informada!!!" });
  }

  if (passwordBank !== database.banco.senha) {
    return res.status(401).json({ error: "Senha Incorreta!!!" });
  }

  next();
};

module.exports = clientAccountMiddleware;
