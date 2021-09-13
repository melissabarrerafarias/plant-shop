import React from 'react';
import '../homepage.css';

import plant1 from '../assets/images/plant1.jpg';
import plant2 from '../assets/images/plant2.jpg';
import plant3 from '../assets/images/plant3.jpg';
import plant4 from '../assets/images/plant4.jpg';
import plant5 from '../assets/images/plant5.jpg';
import plant6 from '../assets/images/plant6.jpg';
import plant7 from '../assets/images/plant7.jpg';
import plant8 from '../assets/images/plant8.jpg';
import plant9 from '../assets/images/plant9.jpg';
import plant10 from '../assets/images/plant10.jpg';
import plant11 from '../assets/images/plant11.jpg';
import plant12 from '../assets/images/plant12.jpg';
import plant13 from '../assets/images/plant13.jpg';
import plant14 from '../assets/images/plant14.jpg';
import plant15 from '../assets/images/plant15.jpg';
import plant16 from '../assets/images/plant16.jpg';
import plant17 from '../assets/images/plant17.jpg';
import plant18 from '../assets/images/plant18.jpg';
import plant19 from '../assets/images/plant19.jpg';
import plant20 from '../assets/images/plant20.jpg';

function Homepage() {

    return (
        <div className="container plants-homepage">
            <div className="grid">
                <div className="grid-item grid-item--width4">
                    <img src={plant2} />
                    <p className="plant-name">Jade Pothos</p>
                </div>
                <div class="grid-item grid-item--width3">
                    <img src={plant3} />
                    <p className="plant-name">Scindapsus Picuts</p>
                </div>
                <div class="grid-item grid-item--width3">
                    <img src={plant5} />
                    <p className="plant-name">Philodendron Birkin</p>
                </div>
                <div class="grid-item grid-item--width4">
                    <img src={plant1} />
                    <p className="plant-name">Tulip</p>
                </div>
                <div className="grid-item grid-item--width3">
                    <img src={plant4} />
                    <p className="plant-name">String of Heart</p>
                </div>
                <div class="grid-item grid-item--width3">
                    <img src={plant6} />
                    <p className="plant-name">Red Cherry Philodendron</p>
                </div>
                <div className="grid-item grid-item--width3">
                    <img src={plant7} />
                    <p className="plant-name">Birds Nest Fern</p>
                </div>
                <div class="grid-item grid-item--width4">
                    <img src={plant8} />
                    <p className="plant-name">Jade Pothos</p>
                </div>

                <div class="grid-item grid-item--width3">
                    <img src={plant10} />
                    <p className="plant-name">Yellow Daisy</p>
                </div>
                <div class="grid-item grid-item--width4">
                    <img src={plant11} />
                    <p className="plant-name">London Cactus</p>
                </div>
                <div class="grid-item grid-item--width4">
                    <img src={plant9} />
                    <p className="plant-name">Bonsai</p>
                </div>
                <div className="grid-item grid-item--width3">
                    <img src={plant12} />
                    <p className="plant-name">Succulent</p>
                </div>
                <div class="grid-item grid-item--width3">
                    <img src={plant14} />
                    <p className="plant-name">Monstera Minima</p>
                </div>
                <div className="grid-item grid-item--width4">
                    <img src={plant13} />
                    <p className="plant-name">Succulent</p>
                </div>

                <div class="grid-item grid-item--width3">
                    <img src={plant15} />
                    <p className="plant-name">Cast Iron Plant</p>
                </div>
                <div class="grid-item grid-item--width3">
                    <img src={plant16} />
                    <p className="plant-name">Philodendron Scandens</p>
                </div>
                <div class="grid-item grid-item--width4">
                    <img src={plant17} />
                    <p className="plant-name">Golden Pothos</p>
                </div>
                <div className="grid-item grid-item--width3">
                    <img src={plant18} />
                    <p className="plant-name">Scindapsus Pictus</p>
                </div>
                <div class="grid-item grid-item--width3">
                    <img src={plant19} />
                    <p className="plant-name">Schefflera</p>
                </div>
                <div className="grid-item grid-item--width4">
                    <img src={plant20} />
                    <p className="plant-name">Schefflera</p>
                </div>
            </div>
        </div>
    )
};

export default Homepage;
