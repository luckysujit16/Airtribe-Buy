import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isAuth = localStorage.getItem("sessionToken");
  // const isAuth = true;
  return isAuth ? (
    <div className="container">
      <Outlet />
    </div>
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
}

export default PrivateRoute;
