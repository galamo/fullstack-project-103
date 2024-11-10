const mongoose = require("mongoose")

const VacationSchema = new mongoose.Schema({
    destination: String,
    description: String,
    startDate: Date,
    endDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return new Date(value).getTime() > new Date(this.startDate).getTime()
            },
            message: "Start Date must be older then end date"
        }
    },
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