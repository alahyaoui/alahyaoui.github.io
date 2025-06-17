// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@mui/material';
import "./style/contact.css"

function ContactForm() {
    const [state, handleSubmit] = useForm("mnqwbajb");

    if (state.succeeded) {
        return (
            <section className="contact" id="contact">
                <div className="contact__container">
                    <h2 className="contact__title contact__title--success">Thanks for contacting me!</h2>
                </div>
            </section>
        );
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="contact__title">Contact Me</h2>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__field">
                        <label className="contact__label" htmlFor="subject">Subject</label>
                        <input 
                            className="contact__input"
                            id="subject" 
                            type="text" 
                            name="subject" 
                            placeholder="Subject.." 
                            required 
                        />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    </div>

                    <div className="contact__field">
                        <label className="contact__label" htmlFor="fname">Full Name</label>
                        <input 
                            className="contact__input"
                            id="fname" 
                            type="text" 
                            name="fullname" 
                            placeholder="Your name.." 
                            required
                        />
                        <ValidationError prefix="Fullname" field="fname" errors={state.errors} />
                    </div>

                    <div className="contact__field">
                        <label className="contact__label" htmlFor="email">Email</label>
                        <input 
                            className="contact__input"
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder="Your contact information.." 
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="contact__field">
                        <label className="contact__label" htmlFor="message">Inquiry</label>
                        <textarea 
                            className="contact__textarea"
                            id="message" 
                            name="message" 
                            placeholder="Write something.." 
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
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;