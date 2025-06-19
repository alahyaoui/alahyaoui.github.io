// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@mui/material';
import "./style/contact.css"
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("mnqwbajb");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Here you would typically handle the form submission
        // For now, we'll just show the success message
        setIsSubmitted(true);
        // You might want to update the formData state here
    };

    if (state.succeeded) {
        return (
            <section className="contact" id="contact">
                <div className="contact__container">
                    <h2 className="contact__title contact__title--success">{t('contact.success')}</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="contact__title">{t('contact.title')}</h2>
                {isSubmitted ? (
                    <div className="contact__success">
                        <p>{t('contact.success')}</p>
                    </div>
                ) : (
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__field">
                            <label className="contact__label" htmlFor="subject">{t('contact.form.subject')}</label>
                            <input 
                                className="contact__input"
                                id="subject" 
                                type="text" 
                                name="subject" 
                                placeholder={t('contact.form.subjectPlaceholder')}
                                required 
                                onChange={handleChange}
                            />
                            <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="fname">{t('contact.form.fullName')}</label>
                            <input 
                                className="contact__input"
                                id="fname" 
                                type="text" 
                                name="fullname" 
                                placeholder={t('contact.form.fullNamePlaceholder')}
                                required
                                onChange={handleChange}
                            />
                            <ValidationError prefix="Fullname" field="fname" errors={state.errors} />
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="email">{t('contact.form.email')}</label>
                            <input 
                                className="contact__input"
                                id="email" 
                                type="email" 
                                name="email" 
                                placeholder={t('contact.form.emailPlaceholder')}
                                required
                                onChange={handleChange}
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="message">{t('contact.form.message')}</label>
                            <textarea 
                                className="contact__textarea"
                                id="message" 
                                name="message" 
                                placeholder={t('contact.form.messagePlaceholder')}
                                required
                                onChange={handleChange}
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <Button 
                            className="contact__submit"
                            type="submit" 
                            variant="contained" 
                            size="large" 
                            disabled={state.submitting}
                        >
                            {t('contact.form.submit')}
                        </Button>
                    </form>
                )}
            </div>
        </section>
    );
}

export const Contact = () => {
    const { t } = useTranslation();
    
    return (
        <div className="contact__footer">
            <h3 className="contact__subtitle">{t('footer.contact.subtitle')}</h3>
            <h2 className="contact__title">{t('footer.contact.title')}</h2>
            <p className="contact__text">{t('footer.contact.text')}</p>
        </div>
    );
};

export default ContactForm;