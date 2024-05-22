import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon
 // Import the CSS file

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className='container nav_bar' data-aos="fade-down" data-aos-duration="1000">
                <div className='left nav_items'>Rishikesh</div>
                <div className='right'>
                    {/* Show the menu items directly in desktop view */}
                    <a href="#home" className="nav_items">Home</a>
                    <a href="#about" className="nav_items">About</a>
                    <a href="#skill" className="nav_items">Skill</a>
                    <a href="#project" className="nav_items">Project</a>
                    <a href="#contact" className="nav_items">Contact</a>

                    {/* Show the hamburger icon only in mobile view */}
                    <FaBars className='hamburger-icon' onClick={toggleMenu} />
                </div>
            </div>
            {/* Show the menu items when the hamburger icon is clicked */}
            {showMenu && (
                <div className='mobile-menu'>
                    <a href="#home" className="nav_items">Home</a>
                    <a href="#about" className="nav_items">About</a>
                    <a href="#skill" className="nav_items">Skill</a>
                    <a href="#project" className="nav_items">Project</a>
                    <a href="#contact" className="nav_items">Contact</a>
                </div>
            )}
        </>
    );
};

export default Navbar;
