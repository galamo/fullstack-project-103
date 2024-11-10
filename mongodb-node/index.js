const mongoose = require("mongoose")
const { CarModel } = require("./models/cars")
const { VacationModel } = require("./models/vacations")
const url = "mongodb://localhost:27017/bank"

async function connectToDB() {
    return await mongoose.connect(url)
}

async function init() {
    try {
        await connectToDB()
        console.log("MongoDB connected")
        runQueries()
    } catch (error) {
        console.log("Something went wrong with the connection")
    }
}


async function runQueries() {

    const result = await CarModel.find({ Origin: "USA", Acceleration: { $gte: 12 } }, { Acceleration: 1 })
    console.log(result)
    const vacationsResult = await VacationModel.find()
    console.log(vacationsResult)

    const v = new VacationModel()
    await v.save()


}

// function VacationModel2(_description) {
//     this.description = _description
// }
// VacationModel2.prototype.save = function () { console.log("Save me save me...") }

// const v = new VacationModel2("aaaa");
// v.save()

init()


