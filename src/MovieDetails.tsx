const temp = {
  imdbID: "tt1375666",
  Title: "Inception",
  Year: "2010",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  runtime: 148,
  imdbRating: 8.8,
  userRating: 10,
};

export default function MovieDetails() {
  const {imdbID, Title, Year, Poster, runtime, imdbRating, userRating} = temp;
  return (
    <div className="poster-details">
      <div className="poster-details">
        <img src={Poster} alt="" />
      </div>
    </div>
  )
}