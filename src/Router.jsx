import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import HighLander from "./pages/Shirts/HighLander";
import PeterEngland from "./pages/Shirts/PeterEngland";
import RoadStar from "./pages/Shirts/RoadStar";
import Levis from "./pages/Shirts/Levis";
import Jones from "./pages/Pants/Jones";
import Lee from "./pages/Pants/Lee";
import Polo from "./pages/Pants/polo";
import Spykar from "./pages/Pants/Spykar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Productdetial from "./pages/Productdetial";
import Checkout from "./pages/CheakOut";
import Login from "./pages/Login";
import Admin from "./pages/Admin/Admin";
import AddProduct from "./pages/Admin/AddProduct";
import ManageProducts from "./pages/Admin/ManageProducts";
import Order from "./pages/Admin/Orders";
import Register from "./pages/Register";
import EditProduct from "./pages/Admin/EditProduct";
import AdminRoute from "./pages/Admin/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/highlander",
        element: <HighLander />,
      },
      {
        path: "/peterengland",
        element: <PeterEngland />,
      },
      {
        path: "/roadstar",
        element: <RoadStar />,
      },
      {
        path: "/levis",
        element: <Levis />,
      },
      {
        path: "/jones",
        element: <Jones />,
      },
      {
        path: "/lee",
        element: <Lee />,
      },
      {
        path: "/polo",
        element: <Polo />,
      },
      {
        path: "/spykar",
        element: <Spykar />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Productdetial />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <div>Something went wrong</div>,
      },

      {
        path: "/admin",
        element: (
          <AdminRoute>
            <Admin />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/addproduct",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/manageproducts",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/orders",
        element: (
          <AdminRoute>
            <Order />
          </AdminRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin/edit/:id",
        element: <EditProduct />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
