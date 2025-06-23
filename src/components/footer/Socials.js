import React from 'react';
import './style/socials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { DISCORD_ID, SOCIAL_LINKS } from '../../constants';

function Socials() {
  const { t } = useTranslation();

  const handleCopyToClipboard = (event) => {
    event.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(DISCORD_ID);
      toast.success(t('socials.discordCopied'), { icon: <FontAwesomeIcon icon={faDiscord} size="2x" /> });
    }
  };

  return (
    <section className="socials" id="socials">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="socials__container">
        <h2 className="socials__subtitle">{t('socials.subtitle')}</h2>
        <h1 className="socials__title">{t('socials.title')}</h1>
        <div className="socials__divider"></div>
        <p className="socials__text">{t('socials.text')}</p>
        <nav className="socials__social">
          <ul className="socials__social-list">
            <li className="socials__social-item">
              <a 
                href={SOCIAL_LINKS.LINKEDIN} 
                className="socials__social-link"
                title={t('socials.linkedinTitle')} 
                target="_blank" 
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li className="socials__social-item">
              <a 
                href={SOCIAL_LINKS.GITHUB} 
                className="socials__social-link"
                title={t('socials.githubTitle')} 
                target="_blank" 
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li className="socials__social-item">
              <a 
                href={SOCIAL_LINKS.STACKOVERFLOW} 
                className="socials__social-link"
                title={t('socials.stackoverflowTitle')} 
                target="_blank" 
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </a>
            </li>
            <li className="socials__social-item">
              <button 
                className="socials__social-button"
                title={`${t('socials.discordTitle')} - ${DISCORD_ID}`} 
                onClick={handleCopyToClipboard} 
                type="button"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Socials;