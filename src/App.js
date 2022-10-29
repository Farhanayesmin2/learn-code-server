
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';


function App() {
  return (
    <div className='bg-white   bg-gradient-to-tr from-gray-50  to-gray-100 scroll-smooth hover:scroll-auto'>
     
      <RouterProvider router={router}  ></RouterProvider>
     
    </div>
  );
}

export default App;
// // REACT_APP_ apiKey: "AIzaSyDlnYkmX8lFv9xdqBzK91h5bXsMrPNqRm8",
// REACT_APP_ authDomain: "learn-code-b31de.firebaseapp.com",
// REACT_APP_ projectId: "learn-code-b31de",
// REACT_APP_ storageBucket: "learn-code-b31de.appspot.com",
// REACT_APP_ messagingSenderId: "200026182218",
// REACT_APP_ appId: "1:200026182218:web:ef6ea1e9dce6dff2214cb3"

