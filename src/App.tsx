  // React Dependencies
  import { useEffect, useState } from "react";

  // Styles
  import "./styles/App.css";

  // Common
  import { Movie } from "./components/common/types";
  import LoadingSpinner from "./components/common/LoadingSpinner";
  import { useMovie } from "./components/common/useMovie";

  // Components
  import Main from "./components/layout/Main.1";
  import { NavBar } from "./components/layout/NavBar";
  import { SearchForm } from "./components/NavBar-components/SearchForm";
  import { NumResults } from "./components/NavBar-components/NumResults";
  import Box from "./components/main-components/Box";
  import MoviesList from "./components/main-components/MoviesList";
  import WatchListInfo from "./components/main-components/WatchListInfo";
  import WatchedMoviesList from "./components/main-components/WatchedMoviesList";
  import MovieDetails from "./components/main-components/MovieDetails";
  import Logo from "./components/NavBar-components/Logo";
  import { useLocalStorageState } from "./components/common/useLocalStorageState";

  export default function App() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [searchQuery, setSearchQuery] = useState("");
  
    const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

    const { isLoading, loadingMsg, movies } = useMovie(searchQuery);

    const [watchedMovies, setWatchedMovies] = useLocalStorageState<Movie[]>([], 'watchedMovies');

    const toggleTheme = function () {
      if (theme === "dark") setTheme("light");
      else setTheme("dark");
    };

    const handleClose = function () {
      setSelectedMovie(null);
    };
    const handleOpenMovie = function (id: string | null) {
      setSelectedMovie((selectedId) => (selectedId === id ? null : id));
    };

    const handleAddWatchedMovie = function (movie: Movie) {
      setWatchedMovies((watchedMovies) => [...watchedMovies, movie]);
    };

    const handleRemoveWatchedMovie = function (id: string) {
      setWatchedMovies((watchedMovies) =>
        watchedMovies.filter((movie) => movie.imdbID !== id)
      );
    };

    const movieIsAdded = function (id: string | null) {
      if (!id) return;
      return watchedMovies.find((movie) => movie.imdbID === id);
    };

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
      <>
        <NavBar>
          <Logo onChangeTheme={toggleTheme} />
          <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <NumResults resultsCount={movies.length} />
        </NavBar>
        <Main>
          <Box className="film-list relative">
            {null}
            {isLoading ? (
              <LoadingSpinner>{loadingMsg}</LoadingSpinner>
            ) : (
              <MoviesList
                movies={movies}
                onMovieClick={handleOpenMovie}
                selectedMovie={selectedMovie}
              />
            )}
          </Box>
          {selectedMovie ? (
            <Box className="film-list relative">
              {null}
              <MovieDetails
                selectedMovie={selectedMovie}
                onClose={handleClose}
                onAddWatchedMovie={handleAddWatchedMovie}
                onRemoveWatchedMovie={handleRemoveWatchedMovie}
                movieIsAdded={movieIsAdded}
              />
            </Box>
          ) : (
            <Box className="film-list relative">
              <WatchListInfo watchedMovies={watchedMovies} />
              <WatchedMoviesList
                watchedMovies={watchedMovies}
                onDeleteMovie={handleRemoveWatchedMovie}
                onOpenMovie={handleOpenMovie}
              />
            </Box>
          )}
        </Main>
      </>
    );
  }
