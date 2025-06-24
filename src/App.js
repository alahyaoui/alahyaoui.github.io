import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import {
    About,
    ContactForm,
    Footer,
    Home,
    LanguageSwitcher,
    Navigation,
    Skill,
} from "./components";
import './i18n';

function App() {
    return (
        <Router>
            <div className="page">
                <header>
                    <div className="header__placeholder"></div>
                    <Navigation />
                    <LanguageSwitcher />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skill />} />
                        <Route path="/contact" element={<ContactForm />} />
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App;