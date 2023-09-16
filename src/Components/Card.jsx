import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      const cardDataJSON = JSON.stringify(action.cardData);
      localStorage.setItem(`favCard-${action.cardData.id}`, cardDataJSON);
      return [...state, action.cardData]; 

    case "REMOVE_FAV":
      localStorage.removeItem(`favCard-${action.cardData.id}`);
      return state.filter((card) => card.id !== action.cardData.id); 
    default:
      return state;
  }
};

const Card = ({ name, username, id, origin, onRemove }) => {
  const { theme } = useContext(ContextGlobal);
  const [favoriteCards, dispatch] = useReducer(cardReducer, []);

  const addFav = () => {
    const cardData = { name, username, id };
    dispatch({ type: "ADD_FAV", cardData });
    alert("Tarjeta agregada a favoritos");
  };

  const removeFav = () => {
    const cardData = { id };
    dispatch({ type: "REMOVE_FAV", cardData });
    onRemove(cardData.id); 
    alert("Tarjeta eliminada de favoritos");
  };


  return (
    <div className={`card ${theme}`}>
      <Link to={`/detalle/${id}`}>
        <img src="/images/doctor.jpg" width={180} alt="Photo" />
        <h3>{name}</h3>
        <p>Usuario: {username}</p>
        <p>ID: {id}</p>
      </Link>
      {origin === "home" && (
        <button onClick={addFav} className="favButton">
          Agregar Fav
        </button>
      )}
      {origin === "favs" && (
        <button onClick={removeFav} className="favButton">
          Remover fav
        </button>
      )}
    </div>
  );
};

export default Card;
