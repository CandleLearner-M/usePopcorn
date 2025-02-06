import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import IconButton from "./Buttons";

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

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime?: number;
  imdbRating?: number;
  userRating?: number;
};
export function Main() {
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>(tempWatchedData);

  return (
    <main className="main">
      <MovieResults movies={movies} />
      <WatchedMovies watchedMovies={watchedMovies} />
    </main>
  );
}

type MovieResultsProps = {
  movies: Movie[];
};

function MovieResults({ movies }: MovieResultsProps) {
  const [isOpenMovieModal, setIsOpenMovieModal] = useState(true);
  const onToggleMovieModal = () => setIsOpenMovieModal((isOpen) => !isOpen);

  return (
    <div className="films">
      <IconButton
        type={isOpenMovieModal ? "minus" : "plus"}
        onClick={onToggleMovieModal}
      />
      {isOpenMovieModal &&
        movies.map((movie) => (
          <Fragment key={movie.imdbID}>
            <div className="movie row">
              <img src={movie.Poster} alt={movie.Title} className="poster" />
              <div className="title">
                <h3>{movie.Title}</h3>
                <p>
                  <span>📅</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </div>
            <hr />
          </Fragment>
        ))}
    </div>
  );
}

type WatchedMoviesProps = {
  watchedMovies: Movie[];
};

function WatchedMovies({ watchedMovies }: WatchedMoviesProps) {
  const [isOpenWatchedModal, setIsOpenWatchedModal] = useState(true);
  const onToggleWatchedModal = () => setIsOpenWatchedModal((isOpen) => !isOpen);

  return (
    <div className="watchList relative">
      <IconButton
        type={isOpenWatchedModal ? "minus" : "plus"}
        onClick={onToggleWatchedModal}
      />
      <div className="movie watch-list-info column light-grey cursor-unset">
        <h1>Movies you watched</h1>
        <ul className="watch-list-info-details movie row cursor-unset gap-20">
          <li>#️⃣ 0 movies</li>
          <li>⭐️ 0.00s</li>
          <li>🌟 0.00</li>
          <li>⏳ 0 min</li>
        </ul>
      </div>

      {isOpenWatchedModal &&
        watchedMovies.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        ))}
    </div>
  );
}

function WatchedMovie({ movie }: { movie: Movie }) {
  const { imdbID, Title, Poster, runtime, imdbRating, userRating } = movie;
  return (
    <Fragment key={imdbID}>
      <div className="movie row gap-20">
        <img src={Poster} alt={Title} className="poster" />
        <div className="title flex space-between">
          <h3 className="mg-l-0 mg-b-10">{Title}</h3>
          <ul className="movie row watch-list-info-details gap-20 ">
            <li>
              <span>⏳</span>
              <span>{runtime} min</span>
            </li>
            <li>
              <span>🌟</span>
              <span>{imdbRating}</span>
            </li>
            <li>
              <span>⭐️</span>
              <span>{userRating}</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}
