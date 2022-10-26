import { Carousel } from 'flowbite-react';
import React from 'react';

const Carousels = () => {
    return (
        <div className=' w-full container mx-auto'>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white bg-gradient-to-tr  from-indigo-200 via-purple-900 to-pink-200  ">
    Slide 1
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