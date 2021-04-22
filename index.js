const express = require('express');
const cors = require('cors');
const TeacherController = require('./controllers/TeacherController.js')
const CourseController = require('./controllers/CourseController.js')
const app = express();

app.use(cors({ origin: `http://localhost:3000`, credentials: true }))
app.use(express.json());


app.use('/api/teacher', TeacherController)
app.use('/api/course', CourseController)


app.get("/", (_, res) =>
    res.send("Lesson Server is running ✅ 🎉")
);
app.listen(3000, () => {
    console.log(`Lesson Server is running on http://localhost:3000`)
})