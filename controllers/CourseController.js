const db = require("../models");
const Tutorial = db.course;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    res.send("CREATE COURSE")
};

