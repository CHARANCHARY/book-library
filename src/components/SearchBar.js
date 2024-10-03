import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>

        <div className='search-form-elem flex flex-sb bg-white'>
                  <input  type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => setQuery(e.target.value)} className='form-control' />
                  <button  className='flex flex-c' onClick={handleSearch}>
                    <FaSearch className='text-purple' size = {32} />
                  </button>
                </div>
        </div>
      </div>
   </div>
  );
};

export default SearchBar;
