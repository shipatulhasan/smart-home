import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/Hero1.jpg";

const Home = () => {
  return (
    <section className="container mx-auto ">
      <div className="min-h-[90vh] md:min-h-[50vh] lg:min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        <div className="w-full md:w-3/5 px-4 md:px-10 text-gray-900 py-10 md:py-2">
          <h1 className="text-3xl leading-none font-bold lg:text-6xl xl:max-w-3xl text-gray-800">
            Welcome To Smart Home
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Best E-commerce platform for buying high quality Smart Home
            Appliances at extremely affordable Price.
          </p>
          <div>
            <Link to="/shop">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
              >
                Shop Now
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded-full border-cyan-400 text-gray-900"
              >
                Learn more
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-2/5 order-1 md:order-2 ">
            <img
            src={heroImg}
            alt=""
            className="w-full rounded-lg shadow-md bg-gray-500"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Home;
