import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, image, bookName, publisher, category, rating, tags } = book;
  console.log(book);
  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-md p-6">
        <figure className="bg-gray-200 rounded-2xl p-7">
          <img
            className="w-[100px] h-[166px] 
        "
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="mt-5">
          <div className="flex justify-start items-start gap-3.5 font-semibold text-[#23BE0A]">
            {tags.map((tag) => (
              <h3 className="bg-green-50 px-2 py-2 rounded-full">{tag}</h3>
            ))}
          </div>
          <h2 className="card-title mt-2 font-bold text-2xl">{bookName}</h2>
        </div>
        <div>
          <h2 className="font-semibold text-sm mt-3">By: {publisher}</h2>
        </div>
        <div className="border-2 border-dashed border-gray-200 mt-2"></div>
        <div className="flex justify-between items-center py-3">
          <h2>{category}</h2>
          <h2 className="flex justify-center items-center font-semibold">
            {rating}
            <CiStar />
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Book;
