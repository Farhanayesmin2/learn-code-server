
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
