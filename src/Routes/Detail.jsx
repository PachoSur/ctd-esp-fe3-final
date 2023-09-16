import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


const Detail = () => {
 
 
 const { id } = useParams();
 const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then((response) => response.json())
     .then((data) => { console.log(data);
        setDetalle(data); 
  })
     .catch((error) => console.error("Error fetching API data:", error));
 }, []);

  if (!detalle) {

    return <p>Cargando datos...</p>;
  }

  return (
    <>
      <h1>Información Detallada </h1>
      <img src="/images/doctor.jpg" width={180} alt="Photo"/>
      <h3>Nombre: {detalle.name}</h3> 
        <p>Email: {detalle.email}</p>
        <p>Tel: {detalle.phone}</p>
        <p>Website: {detalle.website}</p>
    </>
  )
}

export default Detail