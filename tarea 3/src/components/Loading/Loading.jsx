import "./Loading.css"

export const Loading = ({src}) => {
  return (
    <div className="Loading">
      <img className="LoadImage" src={src} alt="loading"/>
      <p>Cargando...</p>
    </div>
  )
}
