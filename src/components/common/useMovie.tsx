import { useEffect, useState } from "react";
import { Movie } from "./types";
import { KEY } from "./KEY";

export function useMovie(searchQuery: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("Loading...");
  useEffect(() => {
    const controller = new AbortController();
    async function getMovies() {
      setIsLoading(true);
      setLoadingMsg("Loading...");
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${searchQuery}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wront with fetching movies");
        const data = await res.json();

        if (data.Response === "False") {
          setLoadingMsg("Movie Not Found");
          return;
        }
        setMovies(data.Search);
        setIsLoading(false);
        setLoadingMsg("");
      } catch (error) {
        if (error instanceof Error) {
          if (error.name !== "AbortError") setLoadingMsg(error.message);
        } else {
          setLoadingMsg("An unkown error occured");
        }
      }
    }

    if (searchQuery.length < 3) {
      setMovies([]);
      setLoadingMsg("");
      return;
    }
    getMovies();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return { movies, isLoading, loadingMsg };
}
