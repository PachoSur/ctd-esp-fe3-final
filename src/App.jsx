import {Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import { useContext } from 'react';
import { ContextGlobal } from './Components/utils/global.context';
import './App.css';

function App() {

  const { theme, apiData } = useContext(ContextGlobal);

  return (
      <div className={`App ${theme}`}>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route index path='/home' element={<Home/>} />
            <Route path='/detalle/:id' element={<Detail/>} />
            <Route path='/favs' element={<Favs/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        <Footer/>
      </div>
  );
}

export default App;
