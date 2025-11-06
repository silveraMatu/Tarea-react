import {Outlet, Navigate} from "react-router"
import { NavBar } from "../components/index.components.js"

export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem("isLogged")
  
  return isLogged ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ):(
    <Navigate to="/login"/>
  )
}