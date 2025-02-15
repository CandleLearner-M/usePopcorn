import { Fragment } from "react";
import { Movie } from "./../common/types";

export default function WatchedMoviesList({ watchedMovies, onDeleteMovie }: { watchedMovies: Movie[]; onDeleteMovie: (id: string) => void }) {

  return watchedMovies.map((movie) => (
    <WatchedMovie key={movie.imdbID} movie={movie} />
  ));
}
function WatchedMovie({ movie }: { movie: Movie }) {
  const { imdbID, Title, Poster, runtime, imdbRating, userRating, Year } = movie;
  return (
    <Fragment key={imdbID}>
      <div className="movie row gap-20 relative">
        <button className="btn-remove">x</button>
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
