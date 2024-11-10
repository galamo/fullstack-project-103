const mongoose = require("mongoose")

const VacationSchema = new mongoose.Schema({
    destination: String,
    description: String,
    startDate: Date,
    endDate: Date,
    price: Number,
    photo: {
        type: String,
        validate: {
            validator: function (value) {
                return value.includes("https://")
            },
            message: "Photo is not valid!"
        }
    },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})
const VacationModel = mongoose.model("vacations", VacationSchema)
module.exports = { VacationModel }