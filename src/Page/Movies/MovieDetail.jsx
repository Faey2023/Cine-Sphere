import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <>
      <div
        className="hero min-h-[83vh] mt-5 text-white"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/06/88/73/32/360_F_688733206_JuG6zVOsVmZcjtUgDA0IhJNkgOMpOdms.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 flex justify-center items-center">
          <div className="flex gap-10 px-20">
            <div className="w-1/4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={`image of ${movie?.title}`}
                className=" w-72 h-96"
              />
            </div>
            <div className="w-3/4 flex flex-col justify-center space-y-5">
              <h1 className=" text-7xl font-bold">{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
