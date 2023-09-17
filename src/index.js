const express = require("express");
const app = express();
app.listen(3000);

const querryAcconts = require("./Controllers/ClientsAccounts")

app.get("/contas", querryAcconts);





