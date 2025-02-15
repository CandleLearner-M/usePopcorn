import { Fragment } from "react";
import { Movie } from "./../common/types";

export default function WatchedMoviesList({
  watchedMovies,
  onDeleteMovie,
  onOpenMovie
}: {
  watchedMovies: Movie[];
  onDeleteMovie: (id: string) => void;
  onOpenMovie: (id: string | null) => void
}) {
  return watchedMovies.map((movie) => (
    <WatchedMovie
      key={movie.imdbID}
      movie={movie}
      onDeleteMovie={onDeleteMovie}
    />
  ));
}


function WatchedMovie({
  movie,
  onDeleteMovie,
}: {
  movie: Movie;
  onDeleteMovie: (id: string) => void;
}) {
  const { imdbID, Title, Poster, runtime, imdbRating, userRating, Year } =
    movie;
  return (
    <Fragment key={imdbID}>
      <div className="movie row gap-20 relative">
        <button className="btn-remove" onClick={() => onDeleteMovie(imdbID)}>
          x
        </button>
        <img src={Poster} alt={Title} className="poster" />
        <div className="title flex space-between">
          <h3 className="mg-l-0 mg-b-10">{Title}</h3>
          <ul className="watched-film-info">
            <li>
              <span>📅</span>
              <span> {Year}</span>
            </li>
            <li>
              <span>🌟</span>
              <span>{imdbRating}</span>
            </li>
            <li>
              <span>⭐️</span>
              <span>{userRating}</span>
            </li>
            <li>
              <span>⌛</span>
              <span>{runtime}</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}
