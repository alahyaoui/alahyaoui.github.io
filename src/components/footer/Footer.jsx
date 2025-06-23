import React from "react";
import { useTranslation } from 'react-i18next';
import './style/footer.css';
import { Socials } from ".";
import { DEVELOPER } from '../../constants';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer__container">
      <div className="footer__socials">
        <Socials />
      </div>
      <div className="footer__credits">
        <p>
          {t('footer.developedBy')} <a href={DEVELOPER.GITHUB_URL} target="_blank" rel="noreferrer">{DEVELOPER.NAME}</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;