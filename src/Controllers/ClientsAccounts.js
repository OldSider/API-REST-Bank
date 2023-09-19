const database = require("../DataBase/bancodedados");

const querryAcconts = (req, res) => {
  const contas = database.contas;
  return res.status(200).json(contas);
};

module.exports = querryAcconts;
