import { RouterProvider } from "react-router-dom";
import { Navigate, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartProvider from "../pages/CartContext.jsx";
import Cart from "../pages/Cart.jsx";
import CheckoutPage from "../pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/products" />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/purchase",
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
    ],
  },
]);

function AppRouter() {
  return (
    <CartProvider>
      <RouterProvider router={router} />;
    </CartProvider>
  );
}

export default AppRouter;
