import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import IconButton from "./Buttons";
import { Movie } from "./types";

const average = function (arr: (number | undefined)[]) {
  const validNumber = arr.filter((num): num is number => num !== undefined);
  if (validNumber.length === 0) return 0;
  return validNumber.reduce((acc, num) => acc + num, 0) / validNumber.length;
};

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
      <WatchListInfo watchedMovies={watchedMovies}/>

      {isOpenWatchedModal &&
        watchedMovies.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        ))}
    </div>
  );
}

type WatchListInfoProps = {
  watchedMovies: Movie[];
}

function WatchListInfo({ watchedMovies }: WatchListInfoProps) {
  const watchListLength = watchedMovies.length;
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const totalRuntime = watchedMovies.reduce(
    (acc, movie) => acc + (movie?.runtime || 0),
    0
  );
  return (
    <div className="movie watch-list-info column light-grey cursor-unset">
      <h1>Movies you watched</h1>
      <ul className="watch-list-info-details movie row cursor-unset gap-20">
        <li>#️⃣ {watchListLength} movies</li>
        <li>⭐️ {avgImdbRating}s</li>
        <li>🌟 {avgUserRating}</li>
        <li>⏳ {totalRuntime} min</li>
      </ul>
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

export default WatchedMovies;
