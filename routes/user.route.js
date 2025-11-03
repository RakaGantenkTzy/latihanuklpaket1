const express = require("express")
const app = express()

app.use(express.json())

const userController = require(`../controllers/user.controller`);
const authController = require(`../controllers/auth.controller`)

app.get("/", authController.authorize, userController.getAllUser)
app.get("/:id", authController.authorize, userController.getUser)
app.post("/", authController.authorize, userController.addUser)
app.put("/:id", authController.authorize, userController.updateUser)

module.exports = app