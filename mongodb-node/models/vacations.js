const mongoose = require("mongoose")

const VacationSchema = new mongoose.Schema({
    destination: String,
    description: String,
    startDate: Date,
    endDate: Date,
    price: Number,
    photo: Number,

    createdAt: Date,
    updatedAt: Date
})
const VacationModel = mongoose.model("vacations", VacationSchema)
module.exports = { VacationModel }