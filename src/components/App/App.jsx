import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Welcome = lazy(() => import("../../pages/Welcome/Welcome"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Registration = lazy(() => import("../../pages/Registration/Registration"));

function App() {  
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  )
}

export default App;