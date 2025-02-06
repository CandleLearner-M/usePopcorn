import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import IconButton from "./Buttons";
import { Movie } from "./types";

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
      <WatchListInfo />

      {isOpenWatchedModal &&
        watchedMovies.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} />
        ))}
    </div>
  );
}

function WatchListInfo() {
  return (
    <div className="movie watch-list-info column light-grey cursor-unset">
      <h1>Movies you watched</h1>
      <ul className="watch-list-info-details movie row cursor-unset gap-20">
        <li>#️⃣ 0 movies</li>
        <li>⭐️ 0.00s</li>
        <li>🌟 0.00</li>
        <li>⏳ 0 min</li>
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