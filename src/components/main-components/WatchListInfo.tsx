import { Movie } from "./../common/types";

const average = function (arr: (number | undefined)[]) {
  const validNumber = arr.filter((num): num is number => num !== undefined);
  if (validNumber.length === 0) return 0;
  return validNumber.reduce((acc, num) => acc + num, 0) / validNumber.length;
};

type WatchListInfoProps = {
  watchedMovies: Movie[];
};
export default function WatchListInfo({ watchedMovies }: WatchListInfoProps) {
  const watchListLength = watchedMovies.length;
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating));
  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating));
  const totalRuntime = watchedMovies.reduce((acc, movie) => {
    if (movie && movie.runtime) return acc + (parseFloat(movie?.runtime) || 0);
    else return acc + 0;
  }, 0);
  return (
    <div className="watch-list-details">
      <h1>Movies you watched</h1>
      <ul className="watch-list-info-details movie row cursor-unset gap-20">
        <li>#️⃣ {watchListLength} movies</li>
        <li>⭐️ {avgImdbRating.toFixed(1)}s</li>
        <li>🌟 {avgUserRating.toFixed(1)}</li>
        <li>⏳ {totalRuntime} min</li>
      </ul>
    </div>
  );
}
