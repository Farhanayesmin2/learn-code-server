import React from 'react';
import Others from '../Others/Others';

import { Link } from 'react-router-dom';

import Google from '../../Buttons/Google/Google';
import Github from '../../Buttons/Github/Github';



const RightsideNav = () => {
    return (
        <div>
            <h1 className=''>This is RightsideNav</h1>
            <h1>This is All category   </h1>
            <div>
                <Link className='mb-2'><Google></Google></Link>
            
               
                <Link> <Github></Github> </Link>
               
           
               
           
           </div>

            
            <div>
           <Others></Others>
            </div>
        </div>
    );
};

export default RightsideNav;