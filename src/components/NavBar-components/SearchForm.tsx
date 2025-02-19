import { useEffect, useRef } from "react";
import { useKey } from "../common/useKey";

type SearchFormProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
export function SearchForm({ searchQuery, setSearchQuery }: SearchFormProps) {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const onEnter = function () {
    if (document.activeElement === inputEl.current) return;
    setSearchQuery("");
    inputEl.current?.focus();
  };
  useKey(onEnter, "enter");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
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
