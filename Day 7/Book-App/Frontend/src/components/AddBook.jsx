import React from "react";
import axios from "axios";
const AddBook = () => {
    const handleBook = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const author = e.target.author.value;
        const date = e.target.date.value;
        const image = e.target.image.value;
        const books = {title, author, date, image};
        await  axios.post('https://fsd-backend-dsa-2-ca7m.onrender.com/books', books)
        alert("Book Added Successfully.");
    }
    return(
        <div>
            <h1>Add Book</h1>
            <form onSubmit={handleBook}>
                Title: <input type="text" name="title" placeholder="Title" required />
                Author: <input type="text" name="author" placeholder="Author" required />
                Date: <input type="date" name="date" placeholder="Date" required />
                Image: <input type="text" name="image" placeholder="Image URL" required />
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}
export default AddBook;