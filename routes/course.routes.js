module.exports = (app) => {
  const course = require("../controllers/CourseController.js")

  var router = require("express").Router()

  router.post("/", course.create)
  router.get("/", course.findAll)

  app.use("/api/course", router)
}
