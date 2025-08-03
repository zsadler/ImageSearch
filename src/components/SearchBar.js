import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("Enter car model...");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleClear = (e) => {
    setTerm("");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} onClick={handleClear} />
      </form>
    </div>
  );
}

export default SearchBar;
