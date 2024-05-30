import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute() {
  const isAuth = localStorage.getItem("airtribe-token");
  return isAuth ? (
    <>
      <h1>You are on your way to purchase glory!</h1>
      <Outlet />
    </>
  ) : (
    <Navigate to="/products" />
  );
}

export default PrivateRoute;
