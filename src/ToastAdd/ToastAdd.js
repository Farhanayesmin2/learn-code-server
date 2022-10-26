import React from 'react';

import { BsMessenger } from "react-icons/bs";


const ToastAdd = () => {
    return (
 
            <div className=' text-blue-500 fixed bottom-0 right-0 z-50 d-none lg:block '>
                <a href="https://www.facebook.com"  >
                <BsMessenger className='w-24 h-12'></BsMessenger> 
                </a>
            </div>
       
    );
};

export default ToastAdd;