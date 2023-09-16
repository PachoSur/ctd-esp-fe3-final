import React, {useState, useEffect} from "react";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";


const Favs = () => {

  const [favData, setFavData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar los favoritos desde localStorage al montar el componente
    const claves = Object.keys(localStorage);
    const allData = claves.map((clave) => {
      const cardFav = localStorage.getItem(clave);
      let parsedCard = cardFav;
      try {
        parsedCard = JSON.parse(cardFav);
      } catch (error) {}
      return { key: clave, value: parsedCard };
    });

    setFavData(allData);
  }, []);

  // Función para eliminar una tarjeta de favoritos
  const removeFavorite = (keyToRemove) => {
    const updatedData = favData.filter((item) => item.key !== keyToRemove);
    localStorage.removeItem(keyToRemove);
    setFavData(updatedData);
  };


  return (
    <>
      <h1>Favoritos</h1>
      <div className="card-grid">
      {favData.map((item) => (
          <Card
            key={item.key}
            origin="favs"
            id={item.value.id}
            name={item.value.name}
            username={item.value.username}
            onRemove={() => removeFavorite(item.key)} // Pasa la función de eliminación como prop
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
