import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit} action="">
        <label htmlFor="">Enter Search Term</label>
        <input value={term} type="text" onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
