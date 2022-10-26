
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftsideNav from '../Shared/LeftsideNav/LeftsideNav';
import RightsideNav from '../Shared/RightsideNav/RightsideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto grid col-start-12 grid-flow-col gap-4'>
                <div className=' grid-cols-2'>
                <LeftsideNav></LeftsideNav>
                </div>
                <div className=' grid-cols-7'>
              <Outlet></Outlet>
                </div>
                <div className='grid-cols-3'>
            <RightsideNav></RightsideNav>
                </div>
           </div>
            
              
           
            <Footer></Footer>
        </div>
    );
};

export default Main;