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

const singleDoc = async () => {
    try {
        const result = await MovieModel.findById('690e1d2044d0cb0e37d805a1'); // All Data
        console.log(result);
        console.log(result.name);
        console.log(result.ratings);
        console.log(result.comments);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc2 = async () => {
    try {
        const result = await MovieModel.findById("690e1d2044d0cb0e37d805a5", "name");
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc3 = async () => {
    try {
        const result = await MovieModel.find({ name: "Fight Club" });
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc4 = async () => {
    try {
        const result = await MovieModel.find().limit(3);
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc5 = async () => {
    try {
        const result = await MovieModel.find().skip(2);
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc6 = async () => {
    try {
        const result = await MovieModel.find().countDocuments();
        console.log(`Total documents counted: ${result}`);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc7 = async () => {
    try {
        const result = await MovieModel.find().sort({ name: -1 });  // Sort names in descending order
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc8 = async () => {
    try {
        const result = await MovieModel.find({ money: { $gt: 178000000 } });
        console.log(result);
        console.log("These movies have budget over: $178000000");
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

const singleDoc9 = async () => {
    try {
        const result = await MovieModel.find({ $and: [{ money: 185000000 }, { ratings: 5 }] });
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

export { singleDoc, singleDoc2, singleDoc3, singleDoc4, singleDoc5, singleDoc6, singleDoc7, singleDoc8, singleDoc9 };