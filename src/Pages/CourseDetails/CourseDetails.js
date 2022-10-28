import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const CourseDetails = () => {


    const courses = useLoaderData();

    // const [categories, setCategories] = useState([]);

    // useEffect( () =>{
    //     fetch('https://learn-code-server-theta.vercel.app/courses-categories')
    //     .then( res => res.json())
    //     .then(data => setCategories(data));
    // }, [])

    return (
        <div className='grid md:grid-cols-2 grid-flow-row'>
             {
                courses.map( category =>
                    <Course key={ category.id}  category={ category}  >
                    </Course>
                  
                   )
                  }
        </div>
    );
};

export default CourseDetails;