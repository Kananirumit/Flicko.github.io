const mongoose = require("mongoose");
const ContentType = require("./models/contentTypesModel");  // ✅ Correct filename
const ContentGenre = require("./models/contentGenresModel");  // ✅ Correct filename

mongoose.connect("mongodb://127.0.0.1:27017/movieDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("📡 Connected to MongoDB");
    seedData();
}).catch(err => console.error("❌ MongoDB Connection Error:", err));

const seedData = async () => {
    try {
        await ContentType.deleteMany(); // Clear previous data
        await ContentGenre.deleteMany(); // Clear previous genres

        const contentTypes = await ContentType.insertMany([
            { name: "Movie" },
            { name: "Anime" },
            { name: "Series" },
            { name: "Indian" }
        ]);

        const contentGenres = await ContentGenre.insertMany([
            { name: "Action" },
            { name: "Comedy" },
            { name: "Drama" },
            { name: "Horror" }
        ]);

        console.log("✅ Data Inserted:");
        console.log("🎬 Content Types:", contentTypes);
        console.log("🎭 Content Genres:", contentGenres);

        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Seeding Error:", error);
        mongoose.connection.close();
    }
};
