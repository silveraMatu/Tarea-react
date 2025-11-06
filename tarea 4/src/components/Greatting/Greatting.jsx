import "./Greatting.css"

export const Greatting = () => {

  const username = localStorage.getItem("username")
  return (
    <h3 className="Greatting">Bienvenido {username}</h3>
  )
}
