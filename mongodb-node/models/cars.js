const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
    Name: String,
    Miles_per_Gallon: Number,
    Cylinders: Number,
    Displacement: Number,
    Horsepower: Number,
    Weight_in_lbs: Number,
    Acceleration: Number,
    Year: String,
    Origin: String
})
const CarModel = mongoose.model("cars", CarSchema, "cars")
module.exports = { CarModel }