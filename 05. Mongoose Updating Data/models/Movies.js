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

const updateById = async (id) => {
    try {
        // updateOne(filter, whatToChange?)
        const result = await MovieModel.updateOne({ _id: id }, { ratings: 4.5 });
        console.log(result);
        console.log("=================================================");
    } catch (error) {
        console.error(error);
    }
};

export { updateById };