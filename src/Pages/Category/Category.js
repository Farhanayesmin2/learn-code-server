import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Category = () => {
    const categoriesCourse = useLoaderData();
    console.log(categoriesCourse);
    return (
        <div>
            <h1>This is category.{categoriesCourse.length}</h1>
            {
                categoriesCourse.map(course =><Courses
                    key={course._id}
                    course={course}
                ></Courses>)
            }
        </div>
    );
};

export default Category;