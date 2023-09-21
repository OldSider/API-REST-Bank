const express = require("express");
const routes = express();

const clientAccountsMiddleware = require("../Middleware/ClientAccountsMiddleware");
const registerClientMiddleware = require("../Middleware/RegisterClientMiddleware");
const updateClientAccountMiddleware = require("../Middleware/UpdateClientAccountMiddleware");
const deleteAccountMiddleware = require("../Middleware/DeleteAccountMiddleware");
const depositValueMiddleware = require("../Middleware/depositValueMiddleware");
const WithdrawValueMiddleware = require("../Middleware/WithdrawValueMiddleware");
const transferMiddleware = require("../Middleware/TransferMiddleware");
const bankStatementMiddleware = require("../Middleware/BankStatementMiddleware");

const querryAccounts = require("../Controllers/ClientsAccounts");
const newClient = require("../Controllers/RegisterClient");
const updateClient = require("../Controllers/UpdateClientAccount");
const deleteClient = require("../Controllers/DeleteAccount");
const depositValue = require("../Controllers/depositValue");
const withdrawValue = require("../Controllers/WithdrawValue");
const transferValue = require("../Controllers/TransferValue");
const bankStatemente = require("../Controllers/BankStatement");

routes.get("/contas", clientAccountsMiddleware, querryAccounts);
routes.get("/contas/extrato", bankStatementMiddleware, bankStatemente);

routes.post("/contas", registerClientMiddleware, newClient);
routes.post("/conta/transacoes/sacar", WithdrawValueMiddleware, withdrawValue);
routes.post(
  "/conta/transacoes/depositar",
  depositValueMiddleware,
  depositValue
);
routes.post("/conta/transacoes/transferir", transferMiddleware, transferValue);

routes.delete("/contas/:numeroConta", deleteAccountMiddleware, deleteClient);

routes.put(
  "/contas/:numeroConta/usuario",
  updateClientAccountMiddleware,
  updateClient
);

module.exports = routes;
