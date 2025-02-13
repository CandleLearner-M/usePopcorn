import { Fragment } from "react";
import { Movie } from "./../common/types";

export default function WatchedMoviesList({ watchedMovies }: { watchedMovies: Movie[] }) {
  return watchedMovies.map((movie) => (
    <WatchedMovie key={movie.imdbID} movie={movie} />
  ));
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
              <span> {runtime}</span>
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
