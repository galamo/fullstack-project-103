const mongoose = require("mongoose")
const { CarModel } = require("./models/cars")
const { VacationModel } = require("./models/vacations")
const url = "mongodb://localhost:27017/bank"
const { faker } = require('@faker-js/faker');

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
    try {
        const result = await CarModel.find({ Origin: "USA", Acceleration: { $gte: 12 } }, { Acceleration: 1 })
        console.log(result)
        const vacationsResult = await VacationModel.find()
        console.log(vacationsResult)

        const v = new VacationModel({
            destination: faker.location.country.name,
            photo: "https://image.com",
            startDate: Date.now(),
            endDate: Date.now() + 999999999,
        })
        await v.save()
        const byIdRes = await VacationModel.findOne({ _id: "6730f393a7af7f727c91f816" })
        // console.log(byIdRes)
        console.log("=======================================================")
        if (byIdRes) {
            byIdRes.destination = "NEW DESTINATION"
            byIdRes.save()
        }

        // await byIdRes.save()
        const findNewDestination = await VacationModel.findOne({ destination: "NEW DESTINATION" })
        console.log(findNewDestination)
        await VacationModel.findOneAndUpdate({ _id: "6730f2ad6c9b40893bc4fbc4" }, { destination: "what ever" })
        // byIdRes.save()

        // Sort
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")

        const vacationsResultSorted = await VacationModel.find().sort({ createdAt: "desc" })
        console.log(vacationsResultSorted)


    } catch (ex) {
        console.log(ex.message)
    }



}

// function VacationModel2(_description) {
//     this.description = _description
// }
// VacationModel2.prototype.save = function () { console.log("Save me save me...") }

// const v = new VacationModel2("aaaa");
// v.save()

init()


