import React, { useContext } from "react";
import { LibraryContext } from "../LibraryContext";

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h1>My Library</h1>
      {myLibrary.length === 0 ? (
        <p>No books in your library!</p>
      ) : (
        myLibrary.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyLibraryPage;
