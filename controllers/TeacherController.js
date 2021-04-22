const db = require("../models");
const Tutorial = db.teacher;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    res.send("CREATE TEACHER")
};

