import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/Menu/index.jsx';
import Cart from './components/Cart/index.jsx';
import OrderForm from './components/OrderForm/index.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const totalItems = cart.length;

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

          <Link to="/cart">
            <button className="add-to-cart">
              Кошик ({totalItems})
            </button>
          </Link>

        </header>

        <Routes>
          <Route path="/" element={<Menu addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
          <Route path="/order" element={<OrderForm cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
