import { generateData } from "./generateData.js"

//import json from "./data.json" assert { type: "json" }
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const response = {}

const search = (param, entries) => {
  let json = {}
  json = generateData(entries, param.year, param.month)
  let month = monthArray.findIndex(
    (element) => element.toLowerCase() === param.month.toLowerCase()
  )
  if (month === -1) {
    month = parseInt(param.month)
  }

  const t = new Date(param.year, month, 1)
  let response = {}
  Object.keys(json).forEach((sender) => {
    if (json[sender][t.getFullYear()]) {
      if (json[sender][t.getFullYear()][t.getMonth()]) {
        response[sender] = {}
        response[sender][t.getFullYear()] = {}
        response[sender][t.getFullYear()][t.getMonth()] = {}
        response[sender][t.getFullYear()][t.getMonth()] =
          json[sender][t.getFullYear()][t.getMonth()]
        //console.log(sender, json[sender][t.getFullYear()][t.getMonth()])
      }
    }
  })
  return response
}
export default search
