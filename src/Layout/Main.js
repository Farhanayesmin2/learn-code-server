
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto grid col-span-12  grid-flow-col'>
                <div className=' col-span-5'>
                <LeftsideNav></LeftsideNav>
                </div>
                <div className=' col-span-7  '>
              <Outlet></Outlet>
                </div>
            
           </div>
            
              
           
            <Footer></Footer>
        </div>
    );
};

export default Main;