import { faker } from "@faker-js/faker"
export const generateData = (
  entriesNum,
  year = undefined,
  month = undefined
) => {
  let generated = 0
  let entries = {}
  //console.log("entries num", entriesNum)
  for (let i = 0; i < entriesNum; i++) {
    let user = faker.internet.email()
    entries[user] = {}
    //console.log(entries)
    if (year !== undefined) {
      entries[user][year] = {}
      if (month !== undefined) {
        entries[user][year][month] = {}
        for (let day = 1; day < 28; day++) {
          if (randomThing(20, 1) % 2 === 0) {
            entries[user][year][month][day] = {}
            for (let h = 0; h < randomThing(6, 1); h++) {
              let job = faker.address.cityName()
              let date = new Date(
                year,
                month,
                day,
                randomThing(19, 9),
                randomThing(59, 1)
              )
              entries[user][year][month][day][job] = {}
              entries[user][year][month][day][job] = date
              generated++
            }
          }
        }
      }
    } else {
      for (let j = 0; j < randomThing(5, 1); j++) {
        let year = 2019 + j
        entries[user][year] = {}
        for (let month = 0; month < 12; month++) {
          if (randomThing(20, 1) % 2 === 0) {
            entries[user][year][month] = {}
            for (let day = 1; day < 28; day++) {
              if (randomThing(20, 1) % 2 === 0) {
                entries[user][year][month][day] = {}
                for (let h = 0; h < randomThing(6, 1); h++) {
                  let job = faker.address.cityName()
                  let date = new Date(
                    year,
                    month,
                    day,
                    randomThing(19, 9),
                    randomThing(59, 1)
                  )
                  entries[user][year][month][day][job] = {}
                  entries[user][year][month][day][job] = date
                  generated++
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(`${generated} entries`)
  return entries
}

const randomThing = (max, min) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min)
  return randomNumber
}
