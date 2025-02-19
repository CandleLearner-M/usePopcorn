import { useEffect, useRef } from "react";

type SearchFormProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
export function SearchForm({ searchQuery, setSearchQuery }: SearchFormProps) {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputEl.current)
    inputEl.current?.focus();
  }, [])

  return (
    <form role="search" className="search-form">
      <input
        type="search"
        name="searchMovie"
        id="searchBar"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={inputEl}
      />
    </form>
  );
}
