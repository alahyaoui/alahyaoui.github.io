import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./style/navigation.css"

function Navigation() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <button
        className="navigation__menu-button"
        aria-label={menuOpen ? t('navigation.closeMenu') : t('navigation.openMenu')}
        aria-expanded={menuOpen}
        aria-controls="navigation-list"
        onClick={handleMenuToggle}
      >
        {menuOpen ? '\u2715' : '\u2630'}
      </button>
      <ul
        className={`navigation__list${menuOpen ? ' open' : ''}`}
        id="navigation-list"
      >
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/" onClick={handleLinkClick}>
            {t('navigation.home')}
            <span className="navigation__sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/about" onClick={handleLinkClick}>
            {t('navigation.about')}
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/skills" onClick={handleLinkClick}>
            {t('navigation.skills')}
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/contact" onClick={handleLinkClick}>
            {t('navigation.contact')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;