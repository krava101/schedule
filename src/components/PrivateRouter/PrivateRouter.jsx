import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component }) {
  const isAuth = false;//= useSelector(selectIsAuth);

  return !isAuth ? <Navigate to="/login" /> : Component;
}

export default PrivateRoute;