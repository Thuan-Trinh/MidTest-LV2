import React from 'react';
import { useState } from 'react';
import './Header.css';

const Header = ({ children, home, list, handleBackToHome, handleShowListCards }) => {
    const [activeMenu, setActiveMenu] = useState('home');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        if (menu === 'home') {
            handleBackToHome();
        } else if (menu === 'list') {
            handleShowListCards();
        }
    };
    return (
        <header>
            <div className="header-left">
                <span className="logoName">Anonime</span>
                <nav>
                    <ul>
                        <li
                            className={activeMenu === 'home' ? 'active' : ''}
                            onClick={() => handleMenuClick('home')}
                        >{home}</li>
                        <li
                            className={activeMenu === 'list' ? 'active' : ''}
                            onClick={() => handleMenuClick('list')}
                        >{list}</li>
                    </ul>
                </nav>
            </div>
            {children}
        </header>
    )
}

export default Header