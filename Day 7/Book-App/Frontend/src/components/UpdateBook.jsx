import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [updatedData, setUpdatedData] = useState({ title: '', author: '', date: '', image: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('https://fsd-backend-dsa-2-ca7m.onrender.com/books');
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching books');
    }
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setUpdatedData({ title: book.title, author: book.author, date: book.date, image: book.image });
  };

  const handleUpdate = async () => {
    if (!selectedBook) return;

    try {
      await axios.put(`https://fsd-backend-dsa-2-ca7m.onrender.com/books/${selectedBook._id}`, updatedData);
      alert('Book updated successfully');
      setSelectedBook(null);
      setUpdatedData({ title: '', author: '', date: '', image: '' });
      await fetchBooks(); // Refresh book list after update
    } catch (error) {
      console.error(error);
      alert('Error updating book');
    }
  };

  return (
    <div>
      <h2>Update Books</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author}{' '}
              <button onClick={() => handleEdit(book)}>Edit</button>
            </li>
          ))}
        </ul>
      )}

      {selectedBook && (
        <div>
          <h3>Update Book Details</h3>
          <input
            type="text"
            placeholder="Title"
            value={updatedData.title}
            onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={updatedData.author}
            onChange={(e) => setUpdatedData({ ...updatedData, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Date"
            value={updatedData.date}
            onChange={(e) => setUpdatedData({ ...updatedData, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={updatedData.image}
            onChange={(e) => setUpdatedData({ ...updatedData, image: e.target.value })}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setSelectedBook(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UpdateBook;