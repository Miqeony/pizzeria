import React, { useState } from 'react';
import './pizzaItem.css'

function PizzaItem({ pizza, addToCart }) {
    const [size, setSize] = useState('medium');
    const [crust, setCrust] = useState('traditional');
    const [extras, setExtras] = useState([]);

    const extraIngredients = [
        { name: 'Гриби', price: 25 },
        { name: 'Кукурудза', price: 25 },
        { name: 'Сир', price: 25 },
        { name: 'Помідори', price: 25 },
        { name: 'Ананас', price: 25 },
        { name: 'Буженина', price: 25 },
    ];

    const handleExtrasChange = (ingredient) => {
        if (extras.includes(ingredient)) {
            setExtras(extras.filter((item) => item !== ingredient));
        } else {
            setExtras([...extras, ingredient]);
        }
    };
    const basePrice = pizza.price[size];
    const extrasPrice = extras.length * 25;
    const totalPrice = basePrice + extrasPrice;

    const handleAddToCart = () => {
        addToCart({
            ...pizza,
            size,
            crust,
            extras,
            price: totalPrice,
        });
    };

    const pizzaImage = `/images/${pizza.image}`;

    return (
        <div className="pizza-item">
            <div className="pizza-image">
                <img src={pizzaImage} alt={pizza.name} />
            </div>

            <div className="pizza-info">
                <h3>{pizza.name}</h3>
                <p className="description">{pizza.description}</p>

                <div className="selection-group">
                    <label htmlFor="size-select">Розмір:</label>
                    <select
                        id="size-select"
                        className="box"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        <option value="small">Мала</option>
                        <option value="medium">Середня</option>
                        <option value="large">Велика</option>
                    </select>
                </div>

                <div className="selection-group">
                    <label htmlFor="crust-select">Тісто:</label>
                    <select
                        id="crust-select"
                        value={crust}
                        onChange={(e) => setCrust(e.target.value)}
                        className="box"
                    >
                        <option value="traditional">Традиційне</option>
                        <option value="thin">Тонке</option>
                    </select>
                </div>

                <div className="extras-container">
                    <label className="extras-title">Додаткові інгредієнти (25 грн за кожен):</label>
                    <div className="extras-list">
                        {extraIngredients.map((ingredient) => (
                            <label key={ingredient.name} className="extra-item">
                                <input
                                    type="checkbox"
                                    checked={extras.includes(ingredient.name)}
                                    onChange={() => handleExtrasChange(ingredient.name)}
                                />
                                {ingredient.name}
                            </label>
                        ))}
                    </div>
                </div>


                <p>Загальна ціна: {totalPrice} грн</p>
                <button className="add-to-cart" onClick={handleAddToCart}>Додати до кошика</button>
            </div>
        </div>
    );
}

export default PizzaItem;
