import React, { useState } from "react";

export function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar">
      <h1>🍿 usePopcorn</h1>

      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NumResults />
    </nav>
  );
}
type SearchFormProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

function SearchForm({ searchQuery, setSearchQuery }: SearchFormProps) {
  return (
    <form role="search" className="search-form">
      <input
        type="search"
        name="searchMovie"
        id="searchBar"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

function NumResults() {
  return (
    <p>
      Found
      <strong> 3 </strong>
      results
    </p>
  );
}
