import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/AddToDB";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBooks = data.find((singleBook) => singleBook.bookId === bookId);
  const {
    image,
    bookName,
    publisher,
    category,
    review,
    totalPages,
    yearOfPublishing,
    rating,
  } = singleBooks;
  const handleMark = (id) => {
    Swal.fire({
      title: "Good job!",
      text: "You added new book",
      icon: "success",
    });
    addToStoredDB(id);
  };
  return (
    <div className="flex justify-center items-center gap-10 my-10  ">
      <div className="bg-gray-200 rounded-2xl w-1/2">
        <img
          className=" rounded-2xl w-[400px] mx-auto py-10 "
          src={image}
          alt=""
        />
      </div>
      <div className="w-1/2">
        <div>
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <h3 className="font-semibold text-gray-500">By : {publisher}</h3>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="font-semibold text-gray-500">{category}</h3>
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="text-gray-500">
            <span className="font-bold text-black">Review :</span> {review}
          </h2>
          <div>
            <h2>Tags:</h2>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h3 className="text-gray-500 text-sm mt-5">
            Number of Pages:{" "}
            <span className="font-bold text-black p-8">{totalPages}</span>
          </h3>
          <h3 className="text-gray-500 text-sm mt-2">
            Publisher:{" "}
            <span className="font-bold text-black p-20">{publisher}</span>
          </h3>
          <h3 className="text-gray-500 text-sm mt-2">
            Year of Publishing:{" "}
            <span className="font-bold text-black p-6">{yearOfPublishing}</span>
          </h3>
          <h3 className="text-gray-500 text-sm mt-2">
            Rating: <span className="font-bold text-black p-24">{rating}</span>{" "}
          </h3>
        </div>
        <div className="mt-4">
          <button
            onClick={() => handleMark(id)}
            className="btn px-5 border-2 border-gray-500 mr-5 rounded-md"
          >
            Read
          </button>
          <button className="btn px-5 bg-[#50B1C9] text-white rounded-md">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
