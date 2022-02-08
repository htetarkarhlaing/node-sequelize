//express instances
const express = require("express");
const cors = require("cors");
const clc = require("cli-color");
require("dotenv").config();

//custom imports
const routes = require("./routes");
const db = require("./config");
const PORT = process.env.PORT || 8000;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//custom middlewares
db.sync().then(() => {
  console.log(clc.cyanBright("Database connected!"));
});

//route middlewares
app.use("/", routes);

app.listen(PORT, () => {
  console.log(clc.cyanBright(`Server is running on port ${PORT}`));
});
