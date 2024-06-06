import { RouterProvider } from "react-router-dom";
import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Cart from "../pages/Cart.jsx";
import CheckoutPage from "../pages/CheckoutPage";
import ConfirmationPage from "../pages/ConfirmationPage.jsx";
import OrderHistoryPage from "../pages/OrderHistoryPage.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Profile from "../pages/Profile.jsx";
import E404 from "../pages/E404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" />,
  },
  {
    path: "*",
    element: <E404 />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
    children: [
      {
        path: "/confirmation/:payment_id:&order_id:&signature",
      },
    ],
  },
  {
    path: "/orderhistory",
    element: <OrderHistoryPage />,
  },

  {
    path: "/cart",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <Cart />,
      },

      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/cart/:order",
        element: <CheckoutPage />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
