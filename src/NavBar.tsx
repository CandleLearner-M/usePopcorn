import React, { useState } from "react";

type NavBarProps = {
  resultsCount: number;
};

export function NavBar({ resultsCount }: NavBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="navbar">
      <h1>🍿 usePopcorn</h1>

      <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NumResults resultsCount={resultsCount} />
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

type NumResultsProps = {
  resultsCount: number;
};

function NumResults({ resultsCount }: NumResultsProps) {
  return (
    <p>
      Found
      <strong> {resultsCount} </strong>
      results
    </p>
  );
}
