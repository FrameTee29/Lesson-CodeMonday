import express from 'express';
import cors from 'cors';
import { config } from './config.js'
const { PORT, HOST } = config
const app = express();

app.use(cors({ origin: `http://${HOST}:${PORT}`, credentials: true }))
app.use(express.json());


app.get("/", (_, res) =>
    res.send("Lesson Server is running ✅ 🎉")
);

app.listen(PORT, () => {
    console.log(`Lesson Server is running on http://${HOST}:${PORT}`)
})