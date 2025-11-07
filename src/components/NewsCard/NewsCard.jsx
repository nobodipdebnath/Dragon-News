import React from "react";
import { FaRegBookmark, FaEye} from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const { author, title, thumbnail_url, details, rating, total_view } = news;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-accent text-lg">
              {author?.name}
            </h3>
            <p className="text-sm text-gray-500">
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-2xl">
            <FaRegBookmark className=" cursor-pointer hover:text-gray-700" />
            <CiShare2 className=" cursor-pointer hover:text-gray-700" />
        </div>
      </div>
      <div className="p-5">
        {/* Title */}
        <h2 className="font-bold text-xl  text-primary">{title}</h2>

        {/* Image */}
        <div className="mt-5 mb-8">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Details */}
        <div className="text-accent text-base leading-relaxed">
          {details.slice(0, 200)}...
          <button className="text-orange-500 text-lg font-semibold ml-1 cursor-pointer hover:underline">
            Read More...
          </button>
        </div>

        <div className="h-0.5 my-5 w-full bg-gray-300"></div>

        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center text-orange-500">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={
                  i < rating.number ? "text-orange-500 text-2xl" : "text-gray-300 text-2xl"
                }
              />
            ))}
            <span className="ml-1 text-gray-700 font-medium">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye className="text-2xl" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
