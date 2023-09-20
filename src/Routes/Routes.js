const express = require("express");
const routes = express();

const clientAccountsMiddleware = require("../Middleware/ClientAccountsMiddleware");
const registerClientMiddleware = require("../Middleware/RegisterClientMiddleware");
const updateClientAccountMiddleware = require("../Middleware/UpdateClientAccountMiddleware");
const deleteAccountMiddleware = require("../Middleware/DeleteAccountMiddleware");
const depositValueMiddleware = require("../Middleware/depositValueMiddleware");

const querryAccounts = require("../Controllers/ClientsAccounts");
const newClient = require("../Controllers/RegisterClient");
const updateClient = require("../Controllers/UpdateClientAccount");
const deleteClient = require("../Controllers/DeleteAccount");
const depositValue = require("../Controllers/depositValue");

routes.get("/contas", clientAccountsMiddleware, querryAccounts);
routes.get
routes.post("/contas", registerClientMiddleware, newClient);
routes.post("/transacoes/depositar", depositValueMiddleware, depositValue);
routes.delete("/contas/:numeroConta", deleteAccountMiddleware, deleteClient);
routes.put(
  "/contas/:numeroConta/usuario",
  updateClientAccountMiddleware,
  updateClient
);

module.exports = routes;
