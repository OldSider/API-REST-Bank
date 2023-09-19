const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000);

const routes = require("./Routes/Routes");

app.use(routes);
