import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoDiamondSharp } from "react-icons/io5";
import ReactToPdf from "react-to-pdf";
import { VscFilePdf } from "react-icons/vsc";

const CheckOut = () => {
const allCategoryDetails = useLoaderData();
 const { title, details, author, image_url, total_view, rating } =
    allCategoryDetails;
  console.log(allCategoryDetails);
  const ref = React.createRef();
  return (
    <div>
      <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({ toPdf }) => (
          //   <button onClick={toPdf}>Generate pdf</button>

          <button
            onClick={toPdf}
            type="button"
            class="text-gray-900 w-56 h-12 bg-gradient-to-r from-cyan-900 via-cyan-300 to-cyan-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 flex font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-xl mr-2 mb-2"
          >
            Download Pdf
            <VscFilePdf className=" lg:text-xl"></VscFilePdf>
          </button>
        )}
      </ReactToPdf>
      <div className=" my-5 font-serif dark:text-black bg-gradient-to-br from-green-200 via-lime-200 to-green-400 w-full max-w-sm  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <div ref={ref}>
          <img
            className="p-8 rounded-t-lg"
            src={image_url}
            alt="product image"
          />

          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                {title}
              </h5>
              <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-black">
                Author: {author.name}
              </p>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <span>{details}</span>
            </div>
            <div class="flex items-center mt-2.5 mb-5">
              <span class=" text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Total Purchase: {total_view ? total_view : "No Purchase"}
              </span>
              <span>Rating: {rating.number}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-black">
                $99
              </span>

              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-lime-900 via-lime-300 to-lime-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-xl mr-2 mb-2"
              >
                {" "}
                <Link className="flex" to="/">
                  Purchase Now
                  <IoDiamondSharp className="pt-1 h-6 w-6 text-white pb-1 pl-1"></IoDiamondSharp>{" "}
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const CheckOut = () => {
//     const courses = useLoaderData();
//     console.log(courses.details);
//     return (
//         <div>
//             <h1>Hello,{courses.length }</h1>
//         </div>
//     );
// };

// export default CheckOut;
