import React from 'react';
import './style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const handleCopyToClipboard = (event) => {
    event.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText('ayoubino#8988');
      toast.success('Discord ID copied to clipboard', { icon: <FontAwesomeIcon icon={faDiscord} size="2x" /> });
    }
  };

  return (
    <section className="contact" id="contact">
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
      <div className="contact__container">
        <h2 className="contact__subtitle">... got an idea?</h2>
        <h1 className="contact__title">Let's create awesome things together!</h1>
        <div className="contact__divider"></div>
        <p className="contact__text">Feel free to reach out to me on social media.</p>
        <nav className="contact__social">
          <ul className="contact__social-list">
            <li className="contact__social-item">
              <a 
                href="https://www.linkedin.com/in/ayoub-lahyaoui/" 
                className="contact__social-link"
                title="LinkedIn profile" 
                target="_blank" 
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li className="contact__social-item">
              <a 
                href="https://github.com/alahyaoui" 
                className="contact__social-link"
                title="GitHub profile" 
                target="_blank" 
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li className="contact__social-item">
              <a 
                href="https://stackoverflow.com/users/18534641/ayoub-lahyaoui" 
                className="contact__social-link"
                title="Stack Overflow profile" 
                target="_blank" 
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </a>
            </li>
            <li className="contact__social-item">
              <a 
                href="" 
                className="contact__social-link"
                title="Discord - ayoubino#8988" 
                onClick={handleCopyToClipboard} 
                target="_self"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Contact;