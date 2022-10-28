import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Category = () => {
    const categoriesCourse = useLoaderData();
    console.log(categoriesCourse);
    return (
        <div>
            <h1>This is category.{categoriesCourse.length}</h1>

            <div className='grid    md:grid-cols-2 grid-flow-row'>
            {
                categoriesCourse.map(course =><Courses
                    key={course._id}
                    course={course}
                ></Courses>)
            }
            </div>
           
        </div>
    );
};

export default Category;