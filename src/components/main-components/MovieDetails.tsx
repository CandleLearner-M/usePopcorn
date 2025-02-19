import { useEffect, useRef, useState } from "react";
import { KEY } from "../common/KEY";
import LoadingSpinner from "../common/LoadingSpinner";
import StarRating from "../common/StarRating";
import IconButton from "../common/Buttons";
import { Movie } from "../common/types";
import { useKey } from "../common/useKey";

type MovieDetailsProps = {
  selectedMovie: string;
  onClose: () => void;
  onAddWatchedMovie: (movie: Movie) => void;
  onRemoveWatchedMovie: (id: string) => void;
  movieIsAdded: (id: string | null) => Movie | undefined;
};

interface MovieDetails {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
}
export default function MovieDetails({
  selectedMovie,
  onClose,
  onAddWatchedMovie,
  onRemoveWatchedMovie,
  movieIsAdded,
}: MovieDetailsProps) {
  const tempMovie = movieIsAdded(selectedMovie);
  const isAdded = !!tempMovie;
  const userRate = tempMovie?.userRating || 0;

  const [movie, setMovie] = useState<MovieDetails | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(userRate);

  const countRef = useRef(0);

  useEffect(() => {
    if (rating) countRef.current++;
  }, [rating]);

  useEffect(() => {
    const currentMovie = movieIsAdded(selectedMovie);
    setRating(currentMovie?.userRating || 0);
  }, [selectedMovie, movieIsAdded]);

  useEffect(() => {
    setIsLoading(true);
    async function getMovie() {
      try {
        if (!selectedMovie) return;
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovie}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [selectedMovie]);

  useKey(onClose, "Escape");
  useEffect(() => {
    if (!movie?.Title) return;
    document.title = selectedMovie ? `Movie | ${movie.Title}` : "usePopcorn";
    return () => {
      document.title = "usePopcorn";
    };
  }, [movie, selectedMovie]);

  if (!movie) return null;

  const {
    Poster: poster,
    Genre: genre,
    imdbRating,
    Title: title,
    Runtime: runtime,
    Released: released,
    Plot: plot,
    Actors: actors,
    Director: director,
    Year,
  } = movie;

  const handleBtnAdd = function () {
    onAddWatchedMovie({
      Title: title,
      imdbID: selectedMovie,
      Poster: poster,
      Year,
      imdbRating: parseFloat(imdbRating) || 0,
      runtime,
      userRating: rating,
    });
    onClose();
  };
  return isLoading ? (
    <LoadingSpinner>Loading...</LoadingSpinner>
  ) : (
    <>
      <div className="poster-details">
        <IconButton type="arrow" className="back-arrow" onClick={onClose} />
        <div className="poster-title">
          <img src={poster} alt={title} />
          <div className="title-details">
            <h2>{title}</h2>

            <div>
              <p>{released}</p>
              <p>&bull;</p>
              <p>{runtime}</p>
            </div>
            <div>
              <p>{genre}</p>
            </div>
            <div>
              <p>⭐ {imdbRating} IMDB Rating</p>
            </div>
          </div>
        </div>

        <div className="star-about">
          <div className="star">
            <StarRating
              maxRating={10}
              size={20}
              setUserRating={setRating}
              defaultRating={rating}
            />

            {isAdded && (
              <button
                className="btn-add-remove"
                onClick={() => {
                  onRemoveWatchedMovie(selectedMovie);
                  onClose();
                }}
              >
                Remove from watch list
              </button>
            )}

            {!isAdded && rating > 0 && (
              <button className="btn-add-remove" onClick={handleBtnAdd}>
                + Add to list
              </button>
            )}
          </div>

          <div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </div>
        </div>
      </div>
    </>
  );
}
