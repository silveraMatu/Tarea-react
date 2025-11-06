import { Link } from "react-router"
import "./NavBar.css" // Asegúrate de crear este archivo

export const NavBar = () => {

  const logout = ()=>{
    localStorage.clear()
  }

  return (
    <nav className="navbar-simpsons">
      <Link to="/home" className="nav-link-simpsons">
        Home
      </Link>
      <Link 
        to="/login" 
        onClick={logout} 
        className="nav-link-simpsons nav-link-logout" // Clase especial para Logout
      >
        Logout
      </Link>
    </nav>
  )
}
