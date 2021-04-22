const db = require("../models")
const Teacher = db.teacher
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  const { first_name, last_name, age } = req?.body

  const teacher = {
    first_name: first_name,
    last_name: last_name,
    age: age
  }

  Teacher.create(teacher)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message
      })
    })
}
