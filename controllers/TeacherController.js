const db = require("../models");
const Teacher = db.teacher;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const teacher = {
        first_name: req?.body?.first_name,
        last_name: req?.body?.last_name,
        age: req?.body?.age
    }

    Teacher.create(teacher).then((data) => res.send(data)).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};

