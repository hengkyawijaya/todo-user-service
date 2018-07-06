const { UserController } = require("../controller");

module.exports = (app) => {
  app.post("/users/create", UserController.create),
  app.get("/users", UserController.find),
  app.get("/users/:id", UserController.findOne),
  app.put("/users/:id/update", UserController.update),
  app.post("/users/:id/delete", UserController.destroy)
}