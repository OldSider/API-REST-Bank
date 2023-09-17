const dataBase = require("../DataBase/bancodedados");

const querryAcconts = (req, res) => {
    const passwordBank = req.query.senha_banco;

    if (!passwordBank) {
        return res.status(400).json({ error: "Senha não Informada!!!" });
    }

    if (passwordBank !== dataBase.banco.senha) {
        return res.status(401).json({ error: "Senha Incorreta!!!" });
    }

    const contas = dataBase.contas;
    return res.json({ contas });
}

module.exports = querryAcconts;