import "./App.css";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function App() {
  return (
    <>
      <nav className="navbar">
        <h1>🍿 usePopcorn</h1>
        <form role="search" className="search-form">
          <input
            type="search"
            name="searchMovie"
            id="searchBar"
            placeholder="Search movies..."
          />
        </form>
        <span>Found 3 results</span>
      </nav>

      <main className="main">
        <div className="films">
          <div className="button">
            <span>-</span>
          </div>
          {tempMovieData.map((movie) => (
            <>
              <div key={movie.imdbID} className="movie row">
                <img src={movie.Poster} alt={movie.Title} className="poster" />
                <div className="title">
                  <h3>{movie.Title}</h3>
                  <p>
                    <span>📅</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
        <div className="watchList relative">
          <div className="button">
            <span>+</span>
          </div>
          <div className="movie watch-list-info column">
            <h1>Movies you watched</h1>
            <ul className="watch-list-info-details movie row">
              <li>#️⃣ 0 movies</li>
              <li>⭐️ 0.00s</li>
              <li>🌟 0.00</li>
              <li>⏳ 0 min</li>
            </ul>
          </div>

          {tempWatchedData.map((movie) => (
            <>
              <div key={movie.imdbID} className="movie row gap-20">
                <img src={movie.Poster} alt={movie.Title} className="poster" />
                <div className="title flex space-between">
                  <h3 className="mg-l-0 mg-b-10">{movie.Title}</h3>
                  <ul className="movie row watch-list-info-details gap-20 ">
                    <li>
                      <span>⏳</span>
                      <span>{movie.runtime} min</span>
                    </li>
                    <li>
                      <span>🌟</span>
                      <span>{movie.imdbRating}</span>
                    </li>
                    <li>
                      <span>⭐️</span>
                      <span>{movie.userRating}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
            </>
          ))}
        </div>
      </main>
    </>
  );
}
