import fs from "fs"
import { generateData } from "./generateData.js"

/**
 * * App module to format generated data by generateData.js
 */

let senders
const monthArr = [
  "year",
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
  "total",
]

/**
 *
 * @param  entries number of generated entries
 * @returns formatted entries to show number of emails by month and year
 */

const resumen = (entries) => {
  // if (fs.existsSync("data.json")) {
  //   let handler = fs.readFileSync("data.json")
  //   senders = JSON.parse(handler)
  // }
  senders = generateData(entries)

  let yearMonth = []
  Object.keys(senders).forEach((sender) => {
    let user
    let years = []
    let yMonth = {}

    Object.keys(senders[sender]).forEach((year) => {
      yMonth[year] = {}
      yMonth[year]["year"] = year
      let total = 0
      for (let j = 1; j < monthArr.length; j++) {
        if (senders[sender][year][j]) {
          yMonth[year][monthArr[j]] = Object.keys(
            senders[sender][year][j]
          ).length
          total += yMonth[year][monthArr[j]]
        } else {
          yMonth[year][monthArr[j]] = 0
        }
      }
      yMonth[year]["total"] = total
      years.push(yMonth[year])
    })

    yearMonth.push({ user: sender, years: years })
  })

  return yearMonth
}
export default resumen
