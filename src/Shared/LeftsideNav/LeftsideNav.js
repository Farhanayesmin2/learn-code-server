import { Badge, Button, Sidebar, Toast } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { IoDiamondSharp } from "react-icons/io5";
import { MdLoop, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import Google from '../../Buttons/Google/Google';
import Github from '../../Buttons/Github/Github';
import Others from '../Others/Others';





const LeftsideNav = () => {

  const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('https://learn-code-server-theta.vercel.app/courses-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])

    return (
        <div >
          <div className="w-fit ">
  <Sidebar aria-label="Sidebar with call to action button example">
    <Sidebar.Items>
      <Sidebar.ItemGroup>
                <Link>
                  <Google></Google>
                </Link>
                <Link>
                <Github></Github>
                </Link>
        
      
      </Sidebar.ItemGroup>
              <div>
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-green-400 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            
              All Category:
  <span class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
  {categories.length}
  </span>

  </button>
                
                <button type="button" class="text-white bg-gradient-to-r from-cyan-200 via-rose-300 to-yellow-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 flex text-md"><Link className='flex' to="/login">Get Premium<IoDiamondSharp className='pt-1 h-7 w-6 text-blue-600 pb-1 pl-1'></IoDiamondSharp></Link> </button>   
              <div>
                {
                    categories.map(category => <p key={category.id}>
                      <div className='pt-3 font-sans text-center'>
                      <button type="button" class="text-white bg-gradient-to-bl from-cyan-300 via-fuchsia-900 to-violet-100 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-cyan-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 flex text-md"> <Link  to={`/category/${category.id}`}>{category.name}</Link></button>

                    
                    
                      </div>
                    </p>)
                }
            </div>
   
            </div>
             



    </Sidebar.Items>
            <Sidebar.CTA>
              <Others></Others>
      <div className="mb-3 flex items-center">
        <Badge color="warning">
          Beta Version
        </Badge>
       
      </div>
              <div>
              <Toast>
  <div className="flex !items-start">
    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
      <MdLoop className="h-5 w-5" />
    </div>
    <div className="ml-3 text-sm font-normal">
      <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
        Update available
      </span>
      <div className="mb-2 text-sm font-normal">
        A new software version is available for download.
      </div>
      <div className="flex gap-2">
        <div className="w-full">
          <Button size="xs">
            Update
          </Button>
        </div>
        <div className="w-full">
          <Button
            color="light"
            size="xs"
          >
           <MdClose></MdClose>
          </Button>
        </div>
      </div>
    </div>
    <Toast.Toggle />
  </div>
</Toast>
     </div>
    </Sidebar.CTA>
  </Sidebar>
</div>

        </div>
    );
};

export default LeftsideNav;