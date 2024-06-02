import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute() {
  const isAuth = localStorage.getItem("airtribe-token");
  return isAuth ? (
    <div className="container">
      <p className="fs-6 muted text-end">Authenticated User</p>
      <Outlet />
    </div>
  ) : (
    <>
     <h4>Authenticated User</h4>
    <Navigate to="/products" />
    </>
   
  );
}

export default PrivateRoute;
