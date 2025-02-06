import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import IconButton from "./Buttons";
import { Movie } from "./types";

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
        movies.map((movie) => <Film key={movie.imdbID} movie={movie} />)}
    </div>
  );
}

type FilmProps = {
  movie: Movie;
};

function Film({ movie }: FilmProps) {
  const { imdbID, Title, Poster, Year } = movie;

  return (
    <Fragment key={imdbID}>
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

export default MovieResults;
