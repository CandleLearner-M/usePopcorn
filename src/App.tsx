import "./App.css";
import Main from "./Main.1";
import { NavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { Movie } from "./types";
import { SearchForm } from "./SearchForm";
import { NumResults } from "./NumResults";
import Box from "./Box";
import MoviesList from "./MoviesList";
import WatchListInfo from "./WatchListInfo";
import WatchedMoviesList from "./WatchedMoviesList";
import LoadingSpinner from "./LoadingSpinner";
import MovieDetails from "./MovieDetails";
import Logo from "./Logo";
import { KEY } from "./KEY";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);
  const [searchQuery, setSearchQuery] = useState("");
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("Loading...");
  const [selectedMovie, setSelectedMove] = useState<string | null>("tt1375666");

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
            <MoviesList movies={movies} />
          )}
        </Box>
        {selectedMovie ? (
          <Box className="film-list relative">
            {null}
            <MovieDetails selectedMovie={selectedMovie} />
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
