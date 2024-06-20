import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../custom hooks/useAuth";
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem(user?.uid)) || [];
    setFavoriteMovies(storedFavorites);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-3xl font-semibold mb-5">Favorite Movies</h1>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {favoriteMovies.map((movie) => (
            <>
              <div key={movie.id} className="relative">
                <Link to={`/movie/${movie.id}`} className="cursor-pointer">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`image of ${movie.title}`}
                    className="w-full h-full"
                  />
                </Link>
                <FaHeart className="absolute top-3 left-3 text-red-700 w-7 h-7 cursor-pointer" />
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
