import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css'

function Cart({ cart, updateCart }) {

    const handleRemove = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        updateCart(updatedCart);
    };

    const handleClearCart = () => {
        updateCart([]);
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className=" container container-cart">
            <h2>Ваш кошик</h2>
            {cart.length === 0 ? (
                <p className="emptyCart">Кошик порожній</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div className="inLine" key={index}>

                            <p>{item.name} ({item.size || item.selectedVolume.size}) — {item.price} грн</p>


                            {item.extras && item.extras.length > 0 && (
                                <p>Додаткові інгредієнти: {item.extras.join(', ')}</p>
                            )}

                            <button className="removeButton" onClick={() => handleRemove(index)}>Видалити</button>
                        </div>
                    ))}

                    <h2>Загальна сума: {totalPrice} грн</h2>

                </div>
            )}

            <div className="gap">

                <button className="clear-cart-btn" onClick={handleClearCart}>Очистити кошик</button>

                {cart.length > 0 && (
                    <Link to="/order">
                        <button className="order-btn">Оформити замовлення</button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Cart;

