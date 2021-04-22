module.exports = app => {
    const course = require("../controllers/CourseController.js");

    var router = require("express").Router();

    router.get("/", course.create);

    app.use('/api/course', router);
};