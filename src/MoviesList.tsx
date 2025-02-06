import { Fragment } from "react";
import { Movie } from "./types";

export default function MoviesList({ movies }: { movies: Movie[] }) {
  return movies.map((movie) => <Film key={movie.imdbID} movie={movie} />);
}
type FilmProps = {
  movie: Movie;
};
function Film({ movie }: FilmProps) {
  const { Title, Poster, Year } = movie;

  return (
    <Fragment>
      <div className="movie row">
        <img src={Poster} alt={Title} className="poster" />
        <div className="title">
          <h3>{Title}</h3>
          <p>
            <span>📅</span>
            <span>{Year}</span>
          </p>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}
