import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { LibraryContext } from "../LibraryContext";
import '../App.css'

const BookDetailsPage = () => {
  const { books, addToLibrary } = useContext(LibraryContext);
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  return (
    <div>
      {book ? (
        <div className="book-details">
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Rating: {book.rating}</p>
          <p>Publication Year: {book.publication_year}</p>
          <p>Description: {book.description}</p>
          <button onClick={() => addToLibrary(book)}>Add to My Library</button>
        </div>
      ) : (
        <p>Book not found!</p>
      )}
    </div>
  );
};

export default BookDetailsPage;
