import { useEffect, useState } from "react";
import { KEY } from "./KEY";
import LoadingSpinner from "./LoadingSpinner";
import StarRating from "./StarRating";

type MovieDetailsProps = {
  selectedMovie: string;
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
export default function MovieDetails({ selectedMovie }: MovieDetailsProps) {
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
    Poster,
    Genre,
    imdbRating,
    Title,
    Runtime,
    Released,
    Plot,
    Actors,
    Director,
  } = movie;
  return isLoading ? (
    <LoadingSpinner>Loading...</LoadingSpinner>
  ) : (
    <>
      <div className="poster-details">
        <div className="poster-title">
          <img src={Poster} alt={Title} />
          <div className="title-details">
            <h2>{Title}</h2>

            <div>
              <p>{Released}</p>
              <p>{Runtime}</p>
            </div>
            <div>
              <p>{Genre}</p>
            </div>
            <div>
              <p>⭐ {imdbRating} IMDB Rating</p>
            </div>
          </div>
        </div>

        <div className="star-about">
          <StarRating className="star" maxRating={10} size={20} />
          <div>
            <p>{Plot}</p>

            <p>Starring {Actors}</p>
            <p>Directed by {Director}</p>
          </div>
        </div>
      </div>
    </>
  );
}
