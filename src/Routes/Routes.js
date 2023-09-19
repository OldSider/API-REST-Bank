const express = require("express");
const routes = express();

const clientAccountsMiddleware = require("../Middleware/ClientAccountsMiddleware");
const registerClientMiddleware = require("../Middleware/RegisterClientMiddleware");
const updateClientAccountMiddleware = require("../Middleware/UpdateClientAccountMiddleware");
const deleteAccountMiddleware = require("../Middleware/DeleteAccountMiddleware");

const querryAccounts = require("../Controllers/ClientsAccounts");
const newClient = require("../Controllers/RegisterClient");
const updateClient = require("../Controllers/UpdateClientAccount");
const deleteClient = require("../Controllers/DeleteAccount");

routes.get("/contas", clientAccountsMiddleware, querryAccounts);
routes.post("/contas", registerClientMiddleware, newClient);
routes.delete("/contas/:numeroConta", deleteAccountMiddleware, deleteClient);
routes.put(
  "/contas/:numeroConta/usuario",
  updateClientAccountMiddleware,
  updateClient
);

module.exports = routes;
