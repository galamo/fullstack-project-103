import mongoose from "mongoose";
const url = "mongodb://localhost:27017/bank"


async function connectToDB() {
    return await mongoose.connect(url)
}

async function init() {
    try {
        await connectToDB()
        console.log("MongoDB connected")
    } catch (error) {
        console.log("Something went wrong with the connection")
    }
}

const UserSchema = new mongoose.Schema({
    userName: String,
    password: String,
})
const UsersModel = mongoose.model("users", UserSchema)

export { init, UsersModel };