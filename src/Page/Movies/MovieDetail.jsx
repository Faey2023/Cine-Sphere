import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const MovieDetail = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=995ef3bcfa844028fbb3fca227f46249`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const {
    backdrop_path,
    genre_ids,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie || {};

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
    </>
  );
};

export default MovieDetail;
