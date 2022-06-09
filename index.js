import express from "express"
import cors from "cors"
import search from "./search.js"
import json from "./data.json" assert { type: "json" }
import resumen from "./resumen.js"
import { generateData } from "./generateData.js"

const app = express()
const port = 8080
app.use(cors())

app
  .get("/", (req, res) => {
    res.send("hello Wordl")
  })
  .all("/:year/:month", (req, res) => {
    res.json(search(req.params, 50))
    // console.log(req.params)
  })
  .get("/resumen", (req, res) => {
    res.send(resumen(50))
  })
  .get("/data", (req, res) => {
    res.json(generateData(10))
  })
  .get("*", (req, res) => {
    res.send(`Page not Found`, 404)
  })
  .listen(port, () => {
    console.log(`listening port localhost:${port}`)
  })
