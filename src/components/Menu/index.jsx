import React from 'react';
import PizzaItem from '../PizzaItem';
import DrinkItem from '../DrinkItem';
import './menu.css'
const pizzas = [
    {
        id: 1,
        name: "Маргарита",
        description: "помідори, сир моцарелла, свіжий базилік та оливкова олія",
        price: { small: 100, medium: 150, large: 200 },
        image: "margarita.jpg"
    },
    {
        id: 2,
        name: "Пепероні",
        description: "вершковий соус, моцарелла, салямі пікантна, томат чері, перець пепероні, пармезан, базилік",
        price: { small: 120, medium: 170, large: 220 },
        image: "pepperoni.jpg"
    },
    {
        id: 3,
        name: "Чотири сира",
        description: "сир Моцарела, сир Пармезан, сир твердий, сир Фета, соус вершковий",
        price: { 'small': 125, medium: 140, large: 195 },
        image: "cheese.jpg"
    },
    {
        id: 4,
        name: "Подвійне м'ясо",
        description: "Філе куряче, шинка, мисливські ковбаски, пепероні, сир Моцарелла, печериці, цибуля, соус BBQ та трюфельна олія",
        price: { 'small': 125, medium: 140, large: 195 },
        image: "meat.jpg"
    },
];

const drinks = [
    {
        id: 1,
        name: "Кока-Кола",
        volumes: [
            { size: '1 л', price: 70 },
            { size: '0.5 л', price: 50 },
            { size: '0.33 л', price: 35 }
        ],
        image: "cola.jpg"
    },
    {
        id: 2,
        name: "Фанта",
        volumes: [
            { size: '1 л', price: 65 },
            { size: '0.5 л', price: 45 },
            { size: '0.33 л', price: 30 }
        ],
        image: "fanta.jpg"
    },
    {
        id: 3,
        name: "RedBull",
        volumes: [
            { size: '1 л', price: 80 },
            { size: '0.5 л', price: 55 },
            { size: '0.25л', price: 40 }
        ],
        image: "redBull.jpg"
    },
    {
        id: 4,
        name: "Спрайт",
        volumes: [
            { size: '1 л', price: 45 },
            { size: '0.5 л', price: 35 },
            { size: '0.33 л', price: 30 }
        ],
        image: "sprite.jpg"
    },

];

function Menu() {
    return (
        <div className="container menu-container">
            <h1 className="center-text">Меню</h1>
            <section id="pizza-section">
                <h2 className="color center-text">Піца</h2>
                <div className="card-container">
                    {pizzas.map((pizza) => (
                        <PizzaItem key={pizza.id} pizza={pizza} />
                    ))}
                </div>
            </section>

            <section id="drink-section">
                <h2 className="color center-text">Напої</h2>
                <div className="card-container">
                    {drinks.map((drink) => (
                        <DrinkItem key={drink.id} drink={drink} />
                    ))}
                </div>
            </section>



        </div>
    );
}

export default Menu;
