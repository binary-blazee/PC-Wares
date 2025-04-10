import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import ProductDescription from "./Pages/ProductDescription"
import ErrorPage from './Pages/ErrorPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'description',
        element: <ProductDescription />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
