import { useState, useEffect } from "react";
import {MovieCard} from "./MovieCard";
import searchIcon from "./assets/search.svg";
import "./App.css";

// api key: 99fb94d2

const API_URL = "http://www.omdbapi.com?apikey=99fb94d2";

type Movie = {
  Title : string,
  Type : string,
  imdbID : string,
  Year : string,
  Poster : string,
}

// const movie1 : Movie = {
//   Title: "Batman Begins",
//   Year: "2005",
//   imdbID: "tt0372784",
//   Type: "movie",
//   Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchMovies = async (search:string) => {
    const response = await fetch(`${API_URL}&s=${search}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("");
  }, [])

  return (
    <div className="App">
      <h1>Movies</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) }/>
        <img src={searchIcon} alt="search" onClick={() => searchMovies(searchTerm)}/>
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              { movies.map((movie:Movie) => ( <MovieCard {...movie} /> )) }
            </div>
          )
          : (
            <div className="empty">
              <p>No movies found</p>
            </div>
          )
      }

    </div>
  );
}

export default App