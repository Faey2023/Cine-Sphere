import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
  // code for responsive slides
  const [slidesPerView, setSlidesPerView] = useState(null);

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

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

  //popular movies
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=995ef3bcfa844028fbb3fca227f46249"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setSlidesPerView(5);
      } else if (window.innerWidth >= 1080) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" md:px-32">
      <div className="my-5 space-y-5">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={slidesPerView}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {movies.slice(0, 10).map((movie) => (
            <SwiperSlide key={movie?.id}>
              <Link
                to={`/movie/${movie.id}`}
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
                <p>{movie.genre_ids.map((id) => genres[id]).join(", ")}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center">
          <Link
            to="/allMovie"
            className="capitalize bg-gradient-to-r from-[#06286e] to-[#800030] text-white font-bold p-2 rounded-lg"
          >
            explore more movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
