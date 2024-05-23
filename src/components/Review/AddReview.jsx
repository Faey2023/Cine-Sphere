import { Controller, useForm } from "react-hook-form";

import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const AddReview = () => {
  const [reviews, setReviews] = useState([]);
 

  const { register, handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-5">
        Add review for your favorite movie.
      </h1>
      <p className="text-[#444444] mb-5">
        Your email address will not be published. Required fields are marked *
      </p>
      <form
        className="space-y-5 border-b-2 border-[#dfdfdf]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-3">
          <p>Your rating</p>
          <Controller
            {...register("rating", { required: true })}
            control={control}
            defaultValue={0}
            render={({ field: { value, onChange } }) => {
              return (
                <Rating
                  style={{ maxWidth: 90 }}
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
        </div>
        <div className="flex gap-2">
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-1 outline-[#06286e]"
            placeholder="Name *"
            {...register("name", { required: true })}
          />
          <textarea
            {...register("email", { required: true })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-1 outline-[#06286e]"
            placeholder="Email *"
          />
        </div>
        <div>
          <textarea
            {...register("message", { required: true })}
            rows={10}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-1 outline-[#06286e]"
            placeholder="Your Review *"
          />
        </div>

        <input
          type="submit"
          className="capitalize w-full text-xs bg-gradient-to-r from-[#06286e] to-[#800030] text-white font-bold p-2 rounded-lg"
        />
      </form>
    </div>
  );
};

export default AddReview;
