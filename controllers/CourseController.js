import express from 'express';

const courseRouter = express.Router();

courseRouter.get("", (req, res, next) => {
    return res.send("GET COURSE")
})
courseRouter.post("", (req, res, next) => {
    return res.send("POST COURSE")
})

export default courseRouter;