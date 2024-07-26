import { Navigate, Route, Routes } from "react-router-dom"
import routes from "./conts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthenticatedRoute from "../AuthProvider/AuthProvider";

const RouterPath = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {
        routes.map((item, index) => {
          return <Route key={index} path={item.path} element={<AuthenticatedRoute>{item.component}</AuthenticatedRoute>} />
        })
      }
    </Routes>
  )
}

export default RouterPath;