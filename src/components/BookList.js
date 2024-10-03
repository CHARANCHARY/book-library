import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Link to={`/book/${book.id}`} key={book.id}>
          <BookCard book={book} />
        </Link>
      ))}
    </div>
  );
};

export default BookList;
