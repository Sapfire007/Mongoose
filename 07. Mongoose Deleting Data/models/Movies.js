import mongoose from "mongoose";

// Define Schema
const moviesSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [
        {
            value: { type: String },
            published: { type: Date, default: Date.now }
        },
    ]
});


// Creating Model
const MovieModel = mongoose.model('Movie', moviesSchema);

const dltOne = async () => {
    try {
        const result = await MovieModel.findByIdAndDelete("690e1d2044d0cb0e37d805a1");
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const dltThroughName = async () => {
    try {
        const result = await MovieModel.deleteOne({ name: "Inception" });
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const dltMany = async () => {
    try {
        const result = await MovieModel.deleteMany({ isActive: true });
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

export { dltOne, dltThroughName, dltMany };