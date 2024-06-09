import { Navigate } from "react-router-dom";

function RestrictedRouter({ component: Component }) {
  const isAuth = false//= useSelector(selectIsAuth);

  return isAuth ? <Navigate to="/home" /> : Component;
}

export default RestrictedRouter;