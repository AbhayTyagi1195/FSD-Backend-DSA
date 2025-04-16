const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();
//Design Book Schema
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: String,
    image: String
})
//Design Book model
const Book = mongoose.model('MyBook', BookSchema)
app.post('/books', async (req, res) => {
    try {
        const newbook = new Book(req.body);
        await newbook.save();
        res.status(200).send("Book Added Successfully.");
    }
    catch (err) {
        res.status(500).json(err);
    }
})
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log("Error in connection", err));
app.listen(9001, () => {
    console.log("Server is running on port 9001")
})