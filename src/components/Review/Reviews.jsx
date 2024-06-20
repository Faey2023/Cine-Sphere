import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Reviews = ({ movie }) => {
  const { title } = movie || {};
  const [reviews, setReviews] = useState([]);
  const filteredReview = reviews.filter(
    (review) => review?.movieName === title
  );

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  //delete functionality
  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto my-10 p-5">
        <h1 className="text-3xl font-semibold mb-5">
          {filteredReview?.length === 0 ? (
            <>Reviews</>
          ) : (
            <>{filteredReview.length} Reviews</>
          )}
        </h1>
        {filteredReview?.length === 0 ? (
          <p className="">No reviews for {title}. Be the first to add one!</p>
        ) : (
          <ul className="space-y-5">
            {filteredReview?.map((review, index) => (
              <>
                <div
                  key={index}
                  className="bg-[#FFFFFF] px-20 py-5 rounded-lg border border-gray-500"
                >
                  <div className="flex flex-col space-y-5">
                    <div className="flex justify-between">
                      <div className="flex flex-row gap-5">
                        <img
                          className="w-20 h-20 rounded-full"
                          src={review.photo}
                          alt="user photo"
                          width={75}
                          height={75}
                        />
                        <div className="flex flex-col justify-center text-center">
                          <h1 className="text-xl font-semibold">
                            {review.name}
                          </h1>
                          <Rating
                            style={{ maxWidth: 90 }}
                            value={review.rating}
                            readOnly
                          />
                        </div>
                      </div>
                      <button
                        className="mt-2 text-white py-1 px-3 rounded"
                        onClick={() => handleDeleteReview(index)}
                      >
                        <MdOutlineDeleteOutline className="text-red-500 w-7 h-7" />
                      </button>
                    </div>
                    <p>{review.message}</p>
                  </div>
                </div>
              </>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Reviews;
