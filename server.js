const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors("*"));

const port = process.env.PORT;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define a schema for your MongoDB collection
const dataSchema = new mongoose.Schema({
  end_yea: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: String,
  pestle: String,
  source: String,
  title: String,
  likelihood: String,
});

// Define your MongoDB model
const DataModel = mongoose.model('DataVisualisation', dataSchema, 'data_visualisation');

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define a route to fetch data from MongoDB
app.get("/dashboard-data", async (req, res) => {
  try {
    // Fetch data from MongoDB
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
