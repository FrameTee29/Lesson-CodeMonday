const db = require("../models")
const Course = db.course
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  const { course_name, course_description, teacher_id } = req?.body
  const course = {
    course_name,
    course_description,
    teacher_id
  }

  Course.create(course)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message
      })
    })
}
