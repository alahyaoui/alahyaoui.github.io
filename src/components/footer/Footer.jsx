import React from "react";
import { useTranslation } from 'react-i18next';
import './style/footer.css';
import { Socials } from ".";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer__container">
      <div className="footer__socials">
        <Socials />
      </div>
      <div className="footer_credits">
        <p>
          {t('footer.developedBy')} <a href="https://github.com/alahyaoui" target="_blank" rel="noreferrer">Lahyaoui Ayoub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;