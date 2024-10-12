import React, { useState } from 'react';
import './drinkItem.css'

function DrinkItem({ drink, addToCart }) {
    const [selectedVolume, setSelectedVolume] = useState(drink.volumes[0]);

    const handleAddToCart = () => {
        addToCart({
            ...drink,
            selectedVolume,
            price: selectedVolume.price,
        });
    };

    const drinkImage = `/images/${drink.image}`;

    return (
        <div className="drink-item">
            <div className="drink-image">
                <img src={drinkImage} alt={drink.name} />
            </div>

            <div className="drink-info">
                <h3>{drink.name}</h3>

                <div className="volume-selection">
                    <label htmlFor="volume-select">Виберіть об'єм:</label>
                    <select
                        id="volume-select"
                        value={selectedVolume.size}
                        onChange={(e) =>
                            setSelectedVolume(drink.volumes.find((v) => v.size === e.target.value))
                        }
                        className="volume-select">
                        {drink.volumes.map((volume, index) => (
                            <option key={index} value={volume.size} className="option-style">
                                {volume.size} / {volume.price} грн
                            </option>
                        ))}
                    </select>
                </div>


                <p>Ціна: {selectedVolume.price} грн</p>
                <button className="add-to-cart" onClick={handleAddToCart}>Додати до кошика</button>
            </div>
        </div>
    );
}

export default DrinkItem;







