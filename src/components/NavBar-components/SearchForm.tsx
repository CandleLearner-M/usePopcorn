import { useEffect, useRef } from "react";

type SearchFormProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
export function SearchForm({ searchQuery, setSearchQuery }: SearchFormProps) {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  useEffect(() => {
    const enterPressHandler = function (e: KeyboardEvent) {
      if (document.activeElement === inputEl.current) return;
      if (e.key !== "Enter") return;
      setSearchQuery("");
      inputEl.current?.focus();
    };
    document.addEventListener("keydown", enterPressHandler);
    return () => document.removeEventListener("keydown", enterPressHandler);
  }, [setSearchQuery]);

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
