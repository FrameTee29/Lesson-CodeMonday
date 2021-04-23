const db = require("../models")
const Teacher = db.teacher
const Course = db.course
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  const { first_name, last_name, age } = req?.body

  const teacher = {
    first_name: first_name,
    last_name: last_name,
    age: age
  }

  const account_teacher = await Teacher.findOne({
    where: {
      first_name: first_name
    }
  })

  if (!account_teacher) {
    Teacher.create(teacher)
      .then((data) => res.send(data))
      .catch((err) => {
        res.status(500).send({
          message: err.message
        })
      })
  } else {
    return res.status(500).send({ message: "มีชื่อนี้ในระบบแล้ว" })
  }
}

exports.findAll = async (req, res) => {
  Teacher.findAll({
    where: {}
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message
      })
    })
}
