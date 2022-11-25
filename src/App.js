import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { productsAndcartLoader } from './Api/productsAndcartLoader';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Orders/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './Layouts/Main';


function App() {
  const router=createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'/orders',
          loader:productsAndcartLoader,
          element:<Orders></Orders>
        },
        {
          path:'/Inventory',
          element:<Inventory></Inventory>
        }

      ]
       
  
    },
    {
      path: 'about',
      element:<About></About>
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
