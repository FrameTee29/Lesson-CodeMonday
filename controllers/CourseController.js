const db = require("../models")
const Course = db.course
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  res.send("CREATE COURSE")
}
