module.exports = app => {
    const teacher = require("../controllers/TeacherController.js");

    var router = require("express").Router();

    router.get("/", teacher.create);

    app.use('/api/teacher', router);
};