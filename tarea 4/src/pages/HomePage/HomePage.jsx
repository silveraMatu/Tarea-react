import { Fragment } from "react";
import {
  CharacterInfo,
  Loading,
  Logo,
  NavegationButtons,
  Greatting
} from "../../components/index.components.js";
import { useCounter, useFetch } from "../../hooks/index.hooks.js";
import "./HomePage.css";

export const HomePage = () => {
  const [count, handleIncrement, handleDecrement] = useCounter(1);

  let url = `https://thesimpsonsapi.com/api/characters/${count}`;

  const { data, isLoading, error } = useFetch(url);

  const cardData = {
    name: data?.name,
    portrait_path: data?.portrait_path,
    status: data?.status,
    occupation: data?.occupation,
  };

  return (
    <div className="Hero">
      <Greatting />
      <Logo src="../../../public/title.png" alt="The Simpsons API" />

      {isLoading ? (
        <Loading src="../../public/simpsons-monkey.gif" />
      ) : (
        <Fragment>
          <CharacterInfo {...cardData} />
          <NavegationButtons back={handleDecrement} next={handleIncrement} />
        </Fragment>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};