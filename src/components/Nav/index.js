import React from 'react';
import '../../navbar.css'; 
// import penelope from '../../assets/images/svg-p.svg'; 

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-styles">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Penelope's Plant Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/shop">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;