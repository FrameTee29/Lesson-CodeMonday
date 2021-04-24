require("dotenv").config()

module.exports = {
  HOST: process.env.DB_HOST,
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "lesson",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
