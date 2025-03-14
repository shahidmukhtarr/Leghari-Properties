import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import ForRent from './ForRent';
import ForSale from './ForSale';
import Contact from './Contact';
import Footer from './Footer';
import './app.css';

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/for-rent" element={<ForRent />} />
            <Route path="/for-sale" element={<ForSale />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
);

export default App;
