import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  const temaClass = theme === 'light' ? 'light' : 'dark';

  return (
    <nav className={temaClass}>
      <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button> 

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to='/home'>Inicio</Link>
        <Link to='/favs'>Favoritos</Link>
        <Link to='/contact'>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;
