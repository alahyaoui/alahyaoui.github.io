// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@mui/material';
import "./style/contact.css"
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const formspreeKey = process.env.REACT_APP_FORMSPREE_KEY;

    if (!formspreeKey) {
        console.error('REACT_APP_FORMSPREE_KEY is not set');
        return (
            <section className="contact" id="contact">
                <div className="contact__container">
                    <h2 className="contact__title contact__title--error">{t('contact.disabled')}</h2>
                </div>
            </section>
        );
    }

    const [state, handleSubmit] = useForm(formspreeKey);

    if (state.succeeded) {
        return (
            <section className="contact" id="contact">
                <div className="contact__container">
                    <h2 className="contact__title contact__title--success">{t('contact.success')}</h2>
                </div>
            </section>
        );
    }

    if (state.errors.length > 0) {
        return (
            <section className="contact" id="contact">
                <div className="contact__container">
                    <h2 className="contact__title contact__title--error">{t('contact.error')}</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="contact__title">{t('contact.title')}</h2>
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
            </div>
        </section>
    );
}

export default ContactForm;