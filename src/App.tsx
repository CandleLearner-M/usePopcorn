import "./App.css";
import Main from "./components/layout/Main.1";
import { NavBar } from "./components/layout/NavBar";
import { useEffect, useState } from "react";
import { Movie } from "./types";
import { SearchForm } from "./components/NavBar-components/SearchForm";
import { NumResults } from "./components/NavBar-components/NumResults";
import Box from "./components/main-components/Box";
import MoviesList from "./components/main-components/MoviesList";
import WatchListInfo from "./components/main-components/WatchListInfo";
import WatchedMoviesList from "./components/main-components/WatchedMoviesList";
import LoadingSpinner from "./components/common/LoadingSpinner";
import MovieDetails from "./components/main-components/MovieDetails";
import Logo from "./components/NavBar-components/Logo";
import { KEY } from "./KEY";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("Loading...");
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      setLoadingMsg("Loading...");
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${searchQuery}`
        );

        if (!res.ok)
          throw new Error("Something went wront with fetching movies");
        const data = await res.json();

        if (data.Response === "False") {
          setLoadingMsg("Movie Not Found");
          return;
        }
        setMovies(data.Search);
        console.log(data.Search);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setLoadingMsg(error.message);
        } else {
          setLoadingMsg("An unkown error occured");
        }
      }
    }

    if (searchQuery.length < 3) {
      setMovies([]);
      setLoadingMsg("");
      return;
    }
    getMovies();
  }, [searchQuery]);

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
            />
          </Box>
        ) : (
          <Box className="film-list relative">
            <WatchListInfo watchedMovies={watchedMovies} />
            <WatchedMoviesList watchedMovies={watchedMovies} />
          </Box>
        )}
      </Main>
    </>
  );
}
