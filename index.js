import express from "express"
import cors from "cors"
import search from "./search.js"
//import json from "./data.json" assert { type: "json" }
import resumen from "./resumen.js"
import { generateData } from "./generateData.js"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const app = express()
const port = 8080
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use(cors())

app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
  })
  .all("/:year/:month", (req, res) => {
    let entries = {}
    if (
      req.params.year < 1900 ||
      req.params.year > 2050 ||
      !/^\d+$/.test(req.params.year)
    ) {
      res.status(404).send("Año fuera de rango")
    } else if (
      req.params.month < 0 ||
      req.params.month >= 12 ||
      !/^\d+$/.test(req.params.month)
    ) {
      res.status(404).send("Mes fuera de rango")
    } else {
      entries = search(req.params, 10)
      res.json(entries)
    }
  })
  .get("/resumen", (req, res) => {
    res.send(resumen(50))
  })
  .get("/data", (req, res) => {
    res.json(generateData(10))
  })
  .get("*", (req, res) => {
    res.status(404).send(`Page not Found`)
  })
  .listen(port, () => {
    console.log(`listening port localhost:${port}`)
  })
