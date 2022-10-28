import {  Alert, Toast } from 'flowbite-react';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcTabletAndroid } from "react-icons/fc";

const Register = () => {
  const [error, setError] = useState('');
 
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleRegister = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;
      console.log(name, photoURL, email, password);

      createUser(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              setError('');
              form.reset();
              handleUpdateUserProfile(name, photoURL);
             handleEmailVerification();
          
            
          })
          .catch(error => {
              console.error(error);
             // setError(error.message);
             toast.error(error.message)
          });
    
    
          if (password.length < 6) {
            toast.error("Password Should be 6 character or more.")
        }
        if (password !== confirm) {
            toast.error("Your Password did not match.");
            return;
        }
    if (password === confirm) {
          
      if (!error)  {
        toast.success("Successfully Register");
      }
    }
    
    
  }

  const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }

      updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
  }

  const handleEmailVerification  = () => {
      verifyEmail()
      .then(() =>{})
      .catch(error => console.error(error));
  }

  const handleAccepted = event => {
      setAccepted(event.target.checked)
  }


    return (
        <div>
             <div className='font-sans '> 
             <section className=" min-h-screen flex items-center justify-center">
             <div className="shadow-2xl bg-gradient-to-tr  from-teal-200 via-gray-200 to-violet-200    p-4 w-full max-w-sm  rounded-lg border border-rose-400  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
<form onSubmit={handleRegister}  className="space-y-6" >
  <h5 className="text-2xl text-center font-bold text-gray-900 dark:text-white flex">
  Sign Up<FcTabletAndroid className='h-8 pt-2'></FcTabletAndroid>
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
                 
                
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      placeholder="name"
      required=""
    />
  </div>   
              <div>
                
<label class="block mb-2 text-sm font-medium text-green-900 dark:text-gray-300" for="photoURL">Photo URL</label>
                <input
                  name="photoURL"
                  type="text"
                  class="block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"   />

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
   
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      placeholder="email"
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
     
      placeholder="Password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      required=""
    />
  </div>
  <div>
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Confirm password
    </label>
    <input
      type="password"
      name="confirm"
     
      placeholder="Confirm Password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      required=""
    />
  </div>
  <div className="flex items-start">
    <div className="flex items-start">
      <div className="flex items-center h-5">
        
      </div>
      <p className="text-danger">
                      {error}
                      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
            </p>
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
   Already Have an Account?{" "}
    <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">
    Login
    </Link>
  </div>
</form>
</div>
    {/* image */}
    <div className="lg:block hidden w-1/2">
      <img alt='/'
        className="rounded-3xl  "
        src="https://fgstardustresort.com/wp-content/uploads/2021/04/signin-image.jpg"
      />
    </div>
 
</section>

























          
{/*           
          <div className="shadow-2xl bg-gradient-to-tr  from-teal-200 via-gray-200 to-violet-200    p-4 w-full max-w-sm  rounded-lg border border-rose-400  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
<form onSubmit={handleRegister}  className="space-y-6" >
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
                 
                
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      placeholder="name"
      required=""
    />
  </div>   
              <div>
                
<label class="block mb-2 text-sm font-medium text-green-900 dark:text-gray-300" for="file_input">Upload file</label>
                <input
                  name="photoURL"
                  type="file"
                  class="block  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"   />

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
   
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      placeholder="email"
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
     
      placeholder="Password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      required=""
    />
  </div>
  <div>
    <label
      htmlFor="password"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Confirm password
    </label>
    <input
      type="password"
      name="confirm"
     
      placeholder="Confirm Password"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      required=""
    />
  </div>
  <div className="flex items-start">
    <div className="flex items-start">
      <div className="flex items-center h-5">
        
      </div>
      <p className="text-danger">
                {error}
            </p>
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
   Already Have an Account?{" "}
    <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">
    Login
    </Link>
  </div>
</form>
</div> */}
</div>
        </div>
    );
};

export default Register;