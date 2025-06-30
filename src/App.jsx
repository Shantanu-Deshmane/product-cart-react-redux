import Cart from "./components/cart"
import Home from "./components/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./components/Navbar"
import { Toaster } from 'react-hot-toast'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <div>
          <Navbar />
          <Home />
        </div>
    },
    {
      path: '/cart',
      element:
        <div>
          <Navbar />
          <Cart />
        </div>
    },
  ])


  // FETCH DATA FROM API
  // https://fakestoreapi.com/products

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      
      <RouterProvider router={router} />

    </div>
  )
}

export default App
