import React from 'react';
import './about.css';

const About = () => (
    <>
    <section id='/' className="about-section">
        <h1>
            Welcome to Leghari Properties – your trusted partner in the real estate market.
        </h1>

        <div className="about-container">
            <h2> Our Journey: </h2>
            <p>
                Leghari Properties was born out of a passion for helping people make the right real estate decisions. Over the years, we’ve gained valuable experience in the real estate sector, which has equipped us with the knowledge and expertise to navigate this dynamic industry. Through continuous learning and a deep understanding of market trends, Leghari Properties has become a reliable source for clients seeking to invest, buy, or sell real estate.
            </p>
        </div>

        <div className="about-container">
            <h2> Why Leghari Properties? </h2>
            <p>
                At Leghari Properties, we believe that real estate isn’t just about buying or selling property—it’s about finding the perfect space where your dreams and goals come to life. Our deep understanding of market conditions and commitment to transparent deals makes us a trustworthy partner for your real estate journey.
            </p>
        </div>

        <div className="about-container">
            <h2> Our Vision: </h2>
            <p>
                Our vision is to be the leading real estate agency in the region, known for our professionalism, integrity, and commitment to helping our clients find the best property solutions. We strive to make real estate a simple and rewarding experience for everyone involved.
            </p>
        </div>



        <div className="about-container">
            <h2> Testimonials: </h2>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <p>"Leghari Properties helped me find my dream home. The process was smooth and the team was incredibly professional."</p>
                    <p><em>– Sarah Ali</em></p>
                </div>
                <div className="testimonial-card">
                    <p>"Their market expertise helped me make the right investment decision. Highly recommend their services!"</p>
                    <p><em>– Ahmed Khan</em></p>
                </div>
                <div className="testimonial-card">
                    <p>"I had a fantastic experience with Leghari Properties. They were with me every step of the way in securing the perfect property."</p>
                    <p><em>– Fatima Shah</em></p>
                </div>
            </div>
        </div>

        <div className="touch-container">
            <h2> Get in Touch: </h2>
            <p>
                Ready to take the next step in your real estate journey? <a href="/contact" className="contact-link">Contact us</a> today to discuss your needs or visit our <a href="/for-rent" className="for-rent-link">For Rent</a> or <a href="/for-sale" className="for-sale-link">For Sale</a> pages to explore available properties.
            </p>
        </div>
    </section>
    </>
);

export default About;
