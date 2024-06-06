import { Outlet } from "react-router-dom";

function PrivateRoute() {
  const isAuth = localStorage.getItem("sessionToken");
  // const isAuth = true;
  return isAuth ? (
    <div className="container">
      <Outlet />
    </div>
  ) : (
    <>
      <a href="/login" />
    </>
  );
}

export default PrivateRoute;
