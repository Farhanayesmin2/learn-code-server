import { Carousel } from 'flowbite-react';
import React from 'react';
import { IoDiamondSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Carousels = () => {
    return (
        <div className=' w-full container mx-auto'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white bg-gradient-to-tr  from-indigo-200 via-purple-900 to-pink-200  ">
    <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-900 via-lime-300 to-lime-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-xl mr-2 mb-2"> <Link className='flex'
                            to="/"
                        >Register<IoDiamondSharp className='pt-1 h-6 w-6 text-white pb-1 pl-1'></IoDiamondSharp> </Link>  </button>
    </div>
    <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white bg-gradient-to-br  from-fuchsia-900 via-cyan-400 to-rose-900 ">
      Slide 2
    </div>
    <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white  bg-gradient-to-bl  from-teal-400 via-cyan-50 to-green-400">
      Slide 3
    </div>
  </Carousel>
</div>
        </div>
    );
};

export default Carousels;