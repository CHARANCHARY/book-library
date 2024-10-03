import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookDetailsPage from "./pages/BookDetailsPage";
import MyLibraryPage from "./pages/MyLibraryPage";
import { LibraryContext } from "./LibraryContext";
import bookData from './books.json';

function App() {
  const [books] = useState(bookData.books);
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    setMyLibrary([...myLibrary, book]);
  };

  const removeFromLibrary = (bookId) => {
    setMyLibrary(myLibrary.filter((book) => book.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </LibraryContext.Provider>
  );
}

export default App;
