const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const routes = require("./routes")

// Sync - Database
const db = require("./models/index.js")
db.sequelize.sync({ force: true }).then(() => {
  console.log("Re-Sync db.")
})
const app = express()

app.use(cors({ origin: `http://localhost:3000`, credentials: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes.TeacherRoute(app)
routes.CourseRoute(app)

app.get("/", (_, res) => res.send("Lesson Server is running ✅ 🎉"))
app.listen(3000, () => {
  console.log(`Lesson Server is running on http://localhost:3000`)
})
