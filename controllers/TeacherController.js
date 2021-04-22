import express from 'express';
const teacherRouter = express.Router();

teacherRouter.get("", (req, res, next) => {
    return res.send("GET TAECHER")
})
teacherRouter.post("", (req, res, next) => {
    return res.send("POST TEACHER")
})

export default teacherRouter;