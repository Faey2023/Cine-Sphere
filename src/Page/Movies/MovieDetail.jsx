import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import AddReview from "../../components/Review/AddReview";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [addFav, setAddFav] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=995ef3bcfa844028fbb3fca227f46249`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const {
    backdrop_path,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie || {};

  const handleAddFav = () => {
    if (!user) {
      toast.error("You need to be logged in to add favorites");
      return;
    }

    const storedFavorites = JSON.parse(localStorage.getItem(user.uid)) || [];
    let updatedFavorites;

    if (addFav) {
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== movie.id);
      toast.success("Removed from favorites");
    } else {
      updatedFavorites = [...storedFavorites, movie];
      toast.success("Added to favorites");
    }

    localStorage.setItem(user.uid, JSON.stringify(updatedFavorites));
    setAddFav(!addFav);
  };

  return (
    <>
      <div
        className="hero md:min-h-[83vh] mt-5 text-white"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/06/88/73/32/360_F_688733206_JuG6zVOsVmZcjtUgDA0IhJNkgOMpOdms.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 flex justify-center items-center">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 p-5 md:px-20">
            <div className="md:w-1/4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                alt={`image of ${title}`}
                className="md:w-72 md:h-96 pt-5 md:pt-0"
              />
            </div>
            <div className="md:w-3/4 flex flex-col justify-center space-y-2 md:space-y-5">
              <p className="font-bold">{release_date}</p>
              <h1 className="text-2xl md:text-7xl font-bold">{title}</h1>
              <p className="text-xs md:text-base">{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto my-10 flex flex-col md:flex-row gap-10">
        <div className="relative w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`image of ${title}`}
            className=" w-80 h-full"
          />
          {addFav ? (
            <FaHeart
              className="absolute top-3 left-3 text-red-700 w-7 h-7 cursor-pointer"
              onClick={handleAddFav}
            />
          ) : (
            <FaRegHeart
              className="absolute top-3 left-3 text-red-700 w-7 h-7 cursor-pointer"
              onClick={handleAddFav}
            />
          )}
        </div>
        <AddReview />
      </div>
    </>
  );
};

export default MovieDetail;
