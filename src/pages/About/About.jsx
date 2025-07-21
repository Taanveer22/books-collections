import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-xl font-medium text-gry-800 dark:text-white sm:text-3xl sm:tracking-tight  mb-6">
          About Us
        </h1>
        <div className="mt-6 border-t-2 border-gray-100 dark:border-gray-700 pt-6">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-8">
            We are a passionate team dedicated to creating amazing experiences.
            Our mission is to deliver excellence through innovation and
            creativity.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            To be the leading innovators in our industry, transforming ideas
            into reality.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Empower businesses and individuals through cutting-edge solutions
            and exceptional service.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
            Our Values
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Integrity, Innovation, Collaboration, and Customer-centric approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
