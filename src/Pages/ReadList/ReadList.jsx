import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const handleSort = (type) => {
    setSort(type);
    if (type === "Pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPage - b.totalPage
      );
      setReadList(sortedByPages);
    }
    if (type === "Ratings") {
      const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRatings);
    }
  };
  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-center py-5 bg-gray-200 mt-5 rounded-md">
          Books
        </h2>
      </div>
      {/* sort */}
      <details className="dropdown flex justify-center items-center my-3">
        <summary className="btn bg-[#23BE0A] text-white m-1">
          Sort By {sort ? sort : ""}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("Pages")}>Number of pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Rating</a>
          </li>
        </ul>
      </details>
      <div className="mt-5">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-3 gap-5 mx-auto">
              {readList.map((b) => (
                <Book key={b.bookId} book={b}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
