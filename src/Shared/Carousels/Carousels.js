import { Carousel } from "flowbite-react";
import React from "react";
import { FcSignature } from "react-icons/fc";
import { Link } from "react-router-dom";

const Carousels = () => {
  return (
    <div className=" w-full container mx-auto">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white bg-gradient-to-tr  from-indigo-200 via-purple-900 to-pink-200  ">
            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-rose-900 via-rose-300 to-rose-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-2xl mr-2 mb-2"
            >
              {" "}
              <Link className="flex text-xl" to="/register">
                Join With Us
                <FcSignature className="pt-1 h-10 w-10 text-white text-lg pb-1 pl-1"></FcSignature>{" "}
              </Link>{" "}
            </button>
          </div>
          <div className="flex text-center text-white h-full items-center justify-center  dark:bg-gray-700 dark:text-white bg-gradient-to-br  from-fuchsia-900 via-cyan-400 to-rose-900 ">
            <h1 className="font-serif shadow-xl text-5xl text-bolder">
              Build Up Your <br />
              Skill With Code.
            </h1>
          </div>
          <div className="flex text-center  h-full items-center justify-center  dark:bg-gray-700 dark:text-white  bg-gradient-to-bl  from-teal-400 via-cyan-50 to-green-400">
            <h1 className="font-serif shadow-xl text-5xl text-bolder">
              Improve Your Programming <br />
              Skills With Code{" "}
            </h1>{" "}
            <br />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Carousels;
