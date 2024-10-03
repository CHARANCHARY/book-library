import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>Rating: {book.rating}</p>
    </div>
  );
};

export default BookCard;
