const routes = require('express').Router();

routes.get("/", (req, res) => {
    res.send("Hello World!");
});

const role = require('./role.routes');
routes.use("/roles", role);
const user = require('./user.routes');
routes.use("/users", user);

module.exports = routes;