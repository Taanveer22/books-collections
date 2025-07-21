import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByrating);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sort Dropdown - Improved for dark mode */}
      <div className="mb-6">
        <details className="dropdown">
          <summary className="btn m-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white">
            Sort By: {sort ? sort : "Select"}
          </summary>
          <ul className="dropdown-content menu bg-white dark:bg-gray-800 rounded-box shadow-lg z-10 w-52 p-2 border border-gray-200 dark:border-gray-700">
            <li>
              <a
                className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded text-gray-800 dark:text-gray-200"
                onClick={() => handleSort("pages")}
              >
                Pages
              </a>
            </li>
            <li>
              <a
                className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded text-gray-800 dark:text-gray-200"
                onClick={() => handleSort("ratings")}
              >
                Ratings
              </a>
            </li>
          </ul>
        </details>
      </div>

      {/* Tabs - Improved for dark mode */}
      <Tabs>
        <TabList className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
          <Tab
            className="px-4 py-2 font-medium text-sm cursor-pointer
                      focus:outline-none border-b-2 border-transparent
                      hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600
                      ui-selected:border-blue-600 dark:ui-selected:border-blue-400 
                      ui-selected:text-blue-600 dark:ui-selected:text-blue-400
                      text-gray-700 dark:text-gray-300"
          >
            Read Book List
          </Tab>
          <Tab
            className="px-4 py-2 font-medium text-sm cursor-pointer
                      focus:outline-none border-b-2 border-transparent
                      hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600
                      ui-selected:border-blue-600 dark:ui-selected:border-blue-400 
                      ui-selected:text-blue-600 dark:ui-selected:text-blue-400
                      text-gray-700 dark:text-gray-300"
          >
            My Wish List
          </Tab>
        </TabList>

        {/* Read Book List Tab */}
        <TabPanel>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Books I've Read ({readList.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b} />
            ))}
          </div>
        </TabPanel>

        {/* Wish List Tab */}
        <TabPanel>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            My Wish List
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <p className="text-gray-500 dark:text-gray-400">
              Your wishlist items will appear here
            </p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;