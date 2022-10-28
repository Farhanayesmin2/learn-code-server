import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { FaUserCircle } from "react-icons/fa";
import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from '../../Buttons/ToggleButton/ToggleButton';

import {  Toast } from 'flowbite-react';
import { RiFireFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext/UserContext';

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.error(error))
  }


  return (
      <div className='mb-8 dark:text-white '>
        <div className='relative w-full'>
            <Toast className='w-full '>
  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-white ">
    <MdLocalOffer className="h-5 w-5 text-red-700" />
  </div>
  <div className="ml-3 text-sm font-normal flex">
            <h1 >Get 60% Offer  </h1> 
            <RiFireFill className='h-5 w-8  text-yellow-500'> </RiFireFill>
  </div>
  <Toast.Toggle />
          </Toast> 
         
            </div>
            <div className='container mx-auto font-extrabold shadow-lg font-sans '>
          
          <Navbar className='bg-gray-50 hover:text-green-800'
   fluid={true}
   rounded={true}
        >
          
   <Navbar.Brand href="https://flowbite.com/">
     <img
       src="https://toppng.com/uploads/preview/free-fire-png-logo-115690680921wyscrhw1c.png"
       
       className="mr-3 h-6 sm:h-9"
       alt="Flowbite Logo"
     />
     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    Learn Code
     </span>
   </Navbar.Brand>
          <div className="flex md:order-2">

            <Dropdown
     >


       <Dropdown.Header>
         <span className="block text-sm">
           Bonnie Green
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
            
            <>
              {
                user?.email ?
             
               <p>Hello</p>
                  :
                  
                          
                  <Link to='/login' className='text-lg  font-serif'>
                  Login
                </Link>
              }
            </>
          
       
             
          

                        {/*
                        
                
                         <Link to='/register'  className='text-xl  font-serif'>
                  Register
                  </Link> 
                        
                        
                        
                        
                        
                        <Link to="/profile">
                            {user?.photoURL ?
                                <img alt='profile-pic'
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </img>
                                : <FaUserCircle className='w-8 h-8 pt-1'></FaUserCircle>
                            }
                        </Link> */}





    
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