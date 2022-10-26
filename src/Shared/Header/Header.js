import { Avatar, Dropdown, Navbar } from 'flowbite-react';

import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../../Buttons/ToggleButton/ToggleButton';

import {  Toast } from 'flowbite-react';
import { RiFireFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";

const Header = () => {
  return (
      <div className='mb-8'>
        <div className='relative w-full '>
            <Toast className='w-full'>
  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200 ">
    <MdLocalOffer className="h-5 w-5 text-red-700" />
  </div>
  <div className="ml-3 text-sm font-normal flex">
            <h1 >Get 60% Offer  </h1> 
            <RiFireFill className='h-5 w-8  text-yellow-500'> </RiFireFill>
  </div>
  <Toast.Toggle />
          </Toast> 
         
            </div>
            <div className='container mx-auto font-extrabold  font-sans '>
          
          <Navbar
   fluid={true}
   rounded={true}
        >
          
   <Navbar.Brand href="https://flowbite.com/">
     <img
       src="https://flowbite.com/docs/images/logo.svg"
       className="mr-3 h-6 sm:h-9"
       alt="Flowbite Logo"
     />
     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    Learn Code
     </span>
   </Navbar.Brand>
   <div className="flex md:order-2">
     <Dropdown
       arrowIcon={false}
       inline={true}
       label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
     >
       <Dropdown.Header>
         <span className="block text-sm">
           Bonnie Green
         </span>
         <span className="block truncate text-sm font-medium">
           name@flowbite.com
         </span>
       </Dropdown.Header>
       <Dropdown.Item>
         Dashboard
       </Dropdown.Item>
       <Dropdown.Item>
         Settings
       </Dropdown.Item>
       <Dropdown.Item>
         Earnings
       </Dropdown.Item>
       <Dropdown.Divider />
       <Dropdown.Item>
         Sign out
       </Dropdown.Item>
     </Dropdown>
     <Navbar.Toggle />
   </div>
   <Navbar.Collapse>
             <Link
               className='text-xl font-serif'
       href="/navbars"
       active={true}
     >
       Home
     </Link>
             <Link  className='text-xl font-serif'>
               Courses
             </Link>
    
             <Link to='/login' className='text-xl font-serif'>
               LogIn
             </Link>
             
             <Link to='/logout'  className='text-xl font-serif'>
             LogOut
             </Link>
    
             <div className='text-teal-500'>
              <ToggleButton></ToggleButton>
            </div>
   
   </Navbar.Collapse>
             </Navbar>
            
           
             </div>



      </div>
      
       
    );
};

export default Header;