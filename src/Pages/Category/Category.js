import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = () => {
    const categoriesCourse = useLoaderData();
    console.log(categoriesCourse);
    return (
        <div>
  <button type="button" class="text-white  bg-gradient-to-r from-green-500 via-green-400 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            
            Avaiable Courses:
<span class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
{categoriesCourse.length}
</span>

</button>
           

            <div className='grid md:grid-cols-2 grid-flow-row'>
            {
                categoriesCourse.map(course => <CategoryDetails
                    key={course._id}
                    course={course}
                ></CategoryDetails>)
            }
            </div>
           
        </div>
    );
};

export default Category;