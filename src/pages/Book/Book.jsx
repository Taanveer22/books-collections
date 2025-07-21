import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data)

  const {
    bookName,
    author,
    bookId,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook || {};

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card h-96 border-2 p-5">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img className="h-32" src={image} alt="books" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by : {publisher}</p>

          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
