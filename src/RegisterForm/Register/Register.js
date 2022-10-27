import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
             <div className='font-sans '> 
          
          <div className="shadow-2xl bg-gradient-to-tr  from-teal-200 via-gray-200 to-violet-200    p-4 w-full max-w-sm  rounded-lg border border-rose-400  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
<form className="space-y-6" action="#">
  <h5 className="text-2xl text-center font-bold text-gray-900 dark:text-white ">
  Sign Up for more Update
  </h5>

  <div>
    <label
      htmlFor="name"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Your name
    </label>
    <input
      type="name"
      name="name"
                 
                  value="name"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      placeholder="name"
      required=""
    />
  </div>        

  <div>
    <label
      htmlFor="email"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Your email
    </label>
    <input
      type="email"
      name="email"
     value="email"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      placeholder="name"
      required=""
    />
  </div>
  <div>
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Your password
    </label>
    <input
      type="password"
      name="password"
      value="password"
      placeholder="••••••••"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      required=""
    />
  </div>
  <div className="flex items-start">
    <div className="flex items-start">
      <div className="flex items-center h-5">
        
      </div>
     
    </div>
    <Link
    
      className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
    >
      Forget Password?
    </Link>
  </div>
  <button
    type="submit"
    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Login to your account
  </button>
  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
    Have not Account?{" "}
    <Link className="text-blue-700 hover:underline dark:text-blue-500">
     Register
    </Link>
  </div>
</form>
</div>
</div>
        </div>
    );
};

export default Register;