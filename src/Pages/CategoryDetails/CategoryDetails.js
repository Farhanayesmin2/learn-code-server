import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoDiamondSharp } from "react-icons/io5";
const CategoryDetails = ({course}) => {

 //const allCategoryDetails = useLoaderData();
   // console.log(allCategoryDetails);
    const { title, details, image_url, category_id } = course;
    return (
        <div className='' >    
<div class=" my-5 font-serif dark:text-black bg-gradient-to-br from-green-200 via-lime-200 to-green-400 w-full max-w-sm  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={ image_url} alt="product image"/>
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{title}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">$599</span>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-900 via-lime-300 to-lime-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-xl mr-2 mb-2"> <Link className='flex' to="/login">Premium Access<IoDiamondSharp className='pt-1 h-6 w-6 text-white pb-1 pl-1'></IoDiamondSharp></Link></button>
        </div>
    </div>
</div>

        </div>
    );
};

export default CategoryDetails;