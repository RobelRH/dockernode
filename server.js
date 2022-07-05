import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Dockerized Fine yep")
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`server running on port ${port}`))