import React from 'react'
import Logo from './Logo.jpeg';
import './KartikNavBar.css';

const KartikNavBar = () => {
    const handleClick = () => {
        var Bar = document.querySelector('.Kartiknavbar');
        Bar.classList.toggle("chalu");
    }

    return (
        <header className='KartikHeader'>
            <div className="KartikLogo">
                <img src={Logo} alt="" />
                Interior
            </div>
            <div className="KartikNavToggler" onClick={handleClick}>
                <div className="Hidden"></div>
                <div className="Hidden"></div>
                <div className="Hidden"></div>
            </div>

            <nav className="Kartiknavbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Out Team</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Calculator</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default KartikNavBar
