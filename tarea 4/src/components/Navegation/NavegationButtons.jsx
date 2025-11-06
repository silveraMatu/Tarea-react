import "./Navegation.css"
 export const NavegationButtons = ({ back, next }) => {
  return (
    <div className="Buttons">
      <button className="BackButton" onClick={back}>Back</button>
      <button className="NextButton" onClick={next}>Next</button>
    </div>
  );
};
