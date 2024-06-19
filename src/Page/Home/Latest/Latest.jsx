import Movie from "./Movie";

const Latest = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-5 md:px-20 px-2 mb-10">
        <h1 className=" font-bold md:text-5xl">Discover the Latest Releases</h1>
        <p className=" text-[#7C7C7C] font-medium text-xl">
          Stay up-to-date with the newest additions to our collection. From
          blockbuster hits to indie gems, explore a curated selection of the
          latest movies that are captivating audiences worldwide. Whether
          you&#39;re looking for thrilling adventures, heartfelt dramas, or
          laugh-out-loud comedies, our latest movie section has something for
          everyone. Dive in and experience the excitement of cinema with Cine
          Sphere!
        </p>
      </div>
      <Movie />
    </>
  );
};

export default Latest;
