import React from "react";
import { useLoaderData, useParams } from "react-router";

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
  console.log(singleBooks);

  //   author
  // :
  // "Harper Lee"
  // bookId
  // :
  // 2
  // bookName
  // :
  // "To Kill a Mockingbird"
  // category
  // :
  // "Fiction"
  // image
  // :
  // "https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp"
  // publisher
  // :
  // "J.B. Lippincott & Co."
  // rating
  // :
  // 4.8
  // review
  // :
  // "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
  // tags
  // :
  // (2) ['Drama', 'Social Justice']
  // totalPages
  // :
  // 281
  // yearOfPublishing
  // :
  // 1960

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
          <button className="btn px-5 border-2 border-gray-500 mr-5 rounded-md">
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
