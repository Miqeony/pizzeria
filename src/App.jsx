import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu/index.jsx';
import './App.css';

function App() {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-header">
          <div className="logo-section">
            <Link to="/">
              <img src="/images/pizzaLogo.png" alt="Логотип" className="logo" />
            </Link>
            <h1 className="restaurant-name">PizzaKotto</h1>
          </div>

          <nav className="main-nav">
            <Link to="/" className="nav-link">головна</Link>

            <div className="menu-wrapper">
              <button className="menu-button" onClick={handleMenuClick}>Меню</button>
              {isSubMenuVisible && (
                <div className="sub-menu">
                  <button onClick={() => scrollToSection('pizza-section')}>Піца</button>
                  <button onClick={() => scrollToSection('drink-section')}>Напої</button>
                </div>
              )}
            </div>

            <Link to="" className="nav-link">про нас</Link>
            <Link to="" className="nav-link">контакти</Link>
          </nav>

          <Link to="">
            <button className="add-to-cart">
              Кошик
            </button>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
