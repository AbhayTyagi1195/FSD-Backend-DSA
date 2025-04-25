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
app.get('/books',async (req,res)=>{
    try {
        const Books=await Book.find();
        res.json(Books);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error')

    }
})
app.get('/search', async (req, res) => {
    const { title } = req.query;
    try {
        const books = await Book.find({ title: { $regex: title, $options: 'i' } }); // case-insensitive search
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});
app.delete('/books/:id', async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) return res.status(404).send('Book not found');
      res.send('Book deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
app.put('/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );
        if (!updatedBook) {
            return res.status(404).send('Book not found');
        }
        res.status(200).json({ message: 'Book updated successfully', data: updatedBook });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected Successfully.'))
    .catch((err) => console.log("Error in Connection.", err));
app.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
})