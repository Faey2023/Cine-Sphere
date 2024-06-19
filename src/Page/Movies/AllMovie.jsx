import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const AllMovie = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  // Fetch genre list on component mount
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/list?api_key=995ef3bcfa844028fbb3fca227f46249"
    )
      .then((res) => res.json())
      .then((data) => {
        //map for genres
        const genreMap = {};
        data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      });
  }, []);

  //popular movies with search functionality
  useEffect(() => {
    if (searchTitle.trim() === "") {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=995ef3bcfa844028fbb3fca227f46249"
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=995ef3bcfa844028fbb3fca227f46249&query=${searchTitle}`
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    }
  }, [searchTitle]);

  //searching
  const handleSearchTitle = (event) => {
    setSearchTitle(event.target.value);
  };

  return (
    <div className="my-10 md:px-32">
      {/* search bar */}
      <div className=" mb-10 flex justify-between">
        <div>
          <h1 className="font-bold text-base">Search movies and TV shows</h1>
          <p className="text-[#7C7C7C] font-medium text-sm">
            Total {movies.length} movies
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <CiSearch className="w-7 h-7" />
          <input
            type="text"
            placeholder="Search by movie title..."
            value={searchTitle}
            onChange={handleSearchTitle}
            className=" outline-none text-[#7C7C7C] font-semibold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {movies.map((movie) => (
          <Link
            key={movie?.id}
            to="/"
            className="space-y-2 hover:cursor-pointer"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
              alt={`image of ${movie?.title}`}
              className=" w-60 h-80"
            />
            <h1 className="text-xl text-[#111111] text-center font-bold hover:text-[#333333]">
              {movie?.title}
            </h1>
            <p>Genres: {movie.genre_ids.map((id) => genres[id]).join(", ")}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
