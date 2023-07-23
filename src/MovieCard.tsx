import { FC } from 'react';

export type MovieCardProps = {
  Title : string,
  Type : string,
  imdbID : string,
  Year : string,
  Poster : string,
}


export const MovieCard : FC<MovieCardProps> = ( movie : MovieCardProps ) => {
  return (
    <div className="movie">
      <div>
        <p>
          {movie.Year}
        </p>
      </div>

      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};