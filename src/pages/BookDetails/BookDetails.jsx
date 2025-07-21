import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from "react-toastify";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image, author, tags, rating, category, review, totalPages } = singleBook || {};

  const handleMarkAsRead = (id) => {
    toast.success("Book marked as read!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    addToStoredDB(id);
  };

  const handleAddToWishlist = (id) => {
    toast.info("Added to wishlist!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    addToStoredDB(id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-6 flex justify-center">
            <img 
              className="h-96 w-full object-contain md:w-64 lg:w-80 rounded-lg shadow-md" 
              src={image} 
              alt={bookName} 
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
              {category}
            </div>
            <h1 className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">
              {bookName}
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-300">by {author}</p>
            
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  {rating}/5 ({totalPages} pages)
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Description</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {review || "No description available for this book."}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleMarkAsRead(id)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Mark as Read
              </button>
              <button 
                onClick={() => handleAddToWishlist(id)}
                className="px-6 py-3 bg-white dark:bg-gray-700 border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-600 font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Add To WishList
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default BookDetails;