import express from 'express';
import cors from 'cors';
import { config } from './config.js'
import TeacherController from './controllers/TeacherController.js'
import CourseController from './controllers/CourseController.js'

const { PORT, HOST } = config
const app = express();

app.use(cors({ origin: `http://${HOST}:${PORT}`, credentials: true }))
app.use(express.json());


app.use('/api/teacher', TeacherController)
app.use('/api/course', CourseController)


app.get("/", (_, res) =>
    res.send("Lesson Server is running ✅ 🎉")
);
app.listen(PORT, () => {
    console.log(`Lesson Server is running on http://${HOST}:${PORT}`)
})