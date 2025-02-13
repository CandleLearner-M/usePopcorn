import { Fragment } from "react";
import { Movie } from "../common/types";

export default function MoviesList({
  movies,
  onMovieClick,
}: {
  movies: Movie[];
  onMovieClick: (id: string | null) => void;
  selectedMovie: string | null;
}) {
  return movies.map((movie) => (
    <Film key={movie.imdbID} movie={movie} onClick={onMovieClick} />
  ));
}
interface FilmProps {
  movie: Movie;
  onClick: (id: string | null) => void;
}
function Film({ movie, onClick }: FilmProps) {
  const { Title, Poster, Year, imdbID } = movie;

  return (
    <Fragment>
      <div onClick={() => onClick(imdbID)} className="movie row">
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
