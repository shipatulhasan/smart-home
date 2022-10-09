import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Roots from "../components/Roots";
import Shop from "../components/Shop";
import { productsAndCart } from "../Loader/ProductsAndCart";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Roots />,
        errorElement:<ErrorPage />,
        loader:productsAndCart,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/home',
                element:<Home />
            },
            {
                path:'/about',
                element:<About />
            },

            {
                path:'/shop',
                element:<Shop />
            },

            {
                path:'/cart',
                element:<Cart />
            }
        ]
    }
])