module.exports = (app) => {
  const teacher = require("../controllers/TeacherController.js")

  var router = require("express").Router()

  router.post("/", teacher.create)
  router.get("/", teacher.findAll)

  app.use("/api/teacher", router)
}
