import React from "react";
import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero-content flex-col lg:flex-row-reverse gap-16 px-8 py-16">
        <div className="relative lg:w-1/2">
          <img 
            src={bookimage} 
            className="w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500" 
            alt="Collection of books"
          />
          <div className="absolute -bottom-6 -right-6 bg-white text-purple-800 px-6 py-3 rounded-xl shadow-lg font-bold text-lg">
            📚 5,000+ Titles
          </div>
        </div>
        
        <div className="lg:w-1/2 text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            📚 Select Your Desired Book From Our Collections
          </h1>
          
          <p className="py-6 text-lg md:text-xl leading-relaxed">
            Discover a world where stories come alive! We bring the magic of books to your fingertips. 
            Whether you're a fiction lover, a student in need of academic resources, or an audiobook 
            enthusiast, our <span className="font-semibold text-yellow-200">vast digital collection</span> has something for everyone.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="badge badge-outline p-4">📖 24/7 Access</div>
            <div className="badge badge-outline p-4">🎧 Audiobooks</div>
            <div className="badge badge-outline p-4">🏆 Bestsellers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;