import "./CharacterInfo.css"

export const CharacterInfo = ({name, portrait_path, status, occupation}) => {
  const colorStatus = status === "Alive" ? "green": "red" 
  return (
    <div className="card">
      <h1 className="CharacterName">{name}</h1>
      <img className="Portrait"src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`} alt={name} 
      loading="lazy"  decoding="async" data-nimg="1"/>
      <p>{occupation}</p>
      <p style={{color: colorStatus}}>{status}</p>
    </div>
  )
}