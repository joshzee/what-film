import PlaceHolder from "./assets/placeholder.jpg";

const MovieCard = ({ movie }) => {
  const imdbLink = "https://imdb.com/title/" + movie.imdbID;

  return (
    <a href={imdbLink} target="_blank" rel="noreferrer">
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : PlaceHolder}
            alt={movie.Title}
            onClick={() => console.log(movie.Title)}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
