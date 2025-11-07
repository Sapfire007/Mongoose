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

const insertManyDoc = async () => {
    try {
        // Creating new document
        const m1 = new MovieModel({
            name: "The Dark Knight",
            ratings: 5,
            money: 185000000,
            genre: ['Action', 'Superhero'],
            isActive: true,
            comments: [
                {
                    value: "This film is one of my number 1 favorite Batman movies."
                }
            ]
        });
        const m2 = new MovieModel({
            name: "Inception",
            ratings: 4,
            money: 160000000,
            genre: ['Action thriller', 'Science fiction'],
            isActive: true,
            comments: [
                {
                    value: "One of the most intoxicating, challenging and beautiful movies of the 21st century."
                }
            ]
        });
        const m3 = new MovieModel({
            name: "Avatar",
            ratings: 4.5,
            money: 310000000,
            genre: ['Science fiction', 'Adventure', 'Action'],
            isActive: true,
            comments: [
                {
                    value: "A Spectrum in its Own Sense."
                }
            ]
        });
        const m4 = new MovieModel({
            name: "Edge of Tomorrow",
            ratings: 4.5,
            money: 178000000,
            genre: ['Action', 'Science fiction', 'Horror'],
            isActive: true,
            comments: [
                {
                    value: "Fantastic concept and story line."
                }
            ]
        });
        const m5 = new MovieModel({
            name: "Fight Club",
            ratings: 4,
            money: 65000000,
            genre: ['Action', 'Thriller', 'Suspense'],
            isActive: true,
            comments: [
                {
                    value: "AN UNMATCHED EXPERIENCE."
                }
            ]
        });
        
        const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

export { insertManyDoc };