const db = require("../models")
const Course = db.course
const Teacher = db.teacher
const Op = db.Sequelize.Op

// Create
exports.create = async (req, res) => {
  const { course_name, course_description, teacher_id } = req?.body
  const course = {
    course_name,
    course_description,
    teacher_id
  }

  let query = {
    where: {},
    include: [{ model: Teacher, as: "teacher" }]
  }
  if (course_name) {
    query["where"] = Object.assign(query["where"], {
      teacher_id: teacher_id,
      course_name: course_name
    })
  }
  const found = await Course.findOne(query)

  if (!found) {
    Course.create(course)
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(500).send({
          message: err.message
        })
      })
  } else {
    return res.status(500).send({
      message: "มีบทเรียนนี้อยู่ในระบบแล้ว"
    })
  }
}

//findAll
exports.findAll = async (req, res) => {
  Course.findAll({
    where: {},
    include: [
      {
        model: Teacher,
        as: "teacher"
      }
    ]
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message
      })
    })
}
