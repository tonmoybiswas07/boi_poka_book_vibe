import React from "react";
import Book from "../Book/Book";

const Books = ({ booksData }) => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center my-10">Books</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
