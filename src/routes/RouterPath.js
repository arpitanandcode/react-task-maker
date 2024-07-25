import { Navigate, Route, Routes } from "react-router-dom"
import routes from "./conts";

const RouterPath = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />

      {
        routes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.component} />
        })
      }
    </Routes>
  )
}

export default RouterPath;