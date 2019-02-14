import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
    <header>
        <section id="headerLeft">
            <h1>Речник</h1>
        </section>
        <section id="headerRight">
            <ul>
                <li><Link to="/">Почетна</Link></li>
                <li><Link to="/recnik">Речник</Link></li>
                <li>Калкулатор</li>
                <li>Контакт</li>
            </ul>
        </section>
    </header>
);