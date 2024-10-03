import React, { useContext, useState } from "react";
import { LibraryContext } from "../LibraryContext";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import '../App.css';

const HomePage = () => {
  const { books } = useContext(LibraryContext);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (query) => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(result);
  };

  return (
    <>
 <div className='holder'>
        <header className='header text-center'>
           
            <div className='header-content text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br/>
                <p className='header-text'>A library is a collection of sources of information and similar resources, made accessible to a defined community for reference or borrowing. It provides physical or digital access to material and may be a physical building or room, or a virtual space, or both. A library's collection can include books, periodicals, newspapers, manuscripts, films, maps, prints, documents, microform, CDs, cassettes, videotapes, DVDs, Blu-ray Discs, e-books, audiobooks, databases, and other formats.</p>
                <SearchBar onSearch={handleSearch} />   
            </div>
           
        </header>
        
       
    </div>
    <BookList books={filteredBooks} />
    </>
  );
};

export default HomePage;
