import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute() {
  // const isAuth = localStorage.getItem("airtribe-token");
  const isAuth = true;
  return isAuth ? (
    <div className="container">
      <p className="fs-6 muted text-end">Authenticated User</p>
      <Outlet />
    </div>
  ) : (
    <>
      <h4>Not Logged In User</h4>
      <Navigate to="/cart" />
    </>
  );
}

export default PrivateRoute;
