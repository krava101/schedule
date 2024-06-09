import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Welcome = lazy(() => import("../../pages/Welcome/Welcome"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Registration = lazy(() => import("../../pages/Registration/Registration"));
const Home = lazy(() => import("../../pages/Home/Home"));
const RestrictedRouter = lazy(() => import("../RestrictedRouter/RestrictedRouter"));
const PrivateRouter = lazy(() => import("../PrivateRouter/PrivateRouter"));


function App() {  
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/registration" element={<RestrictedRouter  component={<Registration/>}/>} />
        <Route path="/login" element={<RestrictedRouter  component={<Login/>}/>} />
        <Route path="/home" element={<PrivateRouter  component={<Home/>}/>} />
      </Routes>
    </Suspense>
  )
}

export default App;