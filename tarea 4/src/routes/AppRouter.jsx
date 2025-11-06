import {Route, Routes} from "react-router"
import { PublicRoutes } from "./PublicRoutes"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { PrivateRoutes } from "./PrivateRoutes"
import { HomePage } from "../pages/HomePage/HomePage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/login" element={<LoginPage />}/>
      </Route>
      <Route element={<PrivateRoutes/>}>
          <Route path="/home" element={<HomePage />}/>
      </Route>
    </Routes>
  )
}
