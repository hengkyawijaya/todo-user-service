const { UserController } = require("../controller");
const { AuthMiddleware } = require("../middleware")
module.exports = (app) => {
  app.post("/users/create", UserController.create),
  app.get("/users", AuthMiddleware, UserController.find),
  app.get("/users/:id", AuthMiddleware, UserController.findOne),
  app.put("/users/:id/update",AuthMiddleware, UserController.update),
  app.post("/users/:id/delete",AuthMiddleware, UserController.destroy)
}