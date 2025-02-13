import { useEffect, useState } from "react";
import { KEY } from "../../KEY";
import LoadingSpinner from "../../LoadingSpinner";
import StarRating from "../../StarRating";
import IconButton from "../../Buttons";
import { Movie } from "../../types";

type MovieDetailsProps = {
  selectedMovie: string;
  onClose: () => void;
  onAddWatchedMovie: (movie: Movie) => void;
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
}: MovieDetailsProps) {
  const [movie, setMovie] = useState<MovieDetails | null>();
  const [isLoading, setIsLoading] = useState(false);

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
  } = movie;
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
          <StarRating className="star" maxRating={10} size={20} />
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
