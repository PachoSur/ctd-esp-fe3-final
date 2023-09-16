import React,{useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';
import { BrowserRouter } from 'react-router-dom';


const Home = () => {

  const { theme, apiData } = useContext(ContextGlobal);
  console.log(theme);

  return (

    <main>
      <h1>Home</h1>
      <div className='card-grid'>
  {apiData ? (
    apiData.map((item) => (
      <Card origin="home" key={item.id} id={item.id} name={item.name} username={item.username} />
    ))
  ) : (
    <p>Cargando datos...</p>
  )}
</div>

    </main>

  )
}

export default Home