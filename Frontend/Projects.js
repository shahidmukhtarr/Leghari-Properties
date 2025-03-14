import React from 'react';
import './projects.css';

const Projects = () => (
    <section id='projects' className="projects-section">
        <h2> Our Services: </h2>
        <div className="projects-container">
            <div className="project-card">
                <h3> Property Buying & Selling: </h3>
                <p>Whether you’re buying your dream home or selling a property, we provide expert advice and a network of buyers and sellers to ensure you get the best deal possible.</p>
            </div>
            <div className="project-card">
                <h3> Rental Services: </h3>
                <p>Looking to rent a property or lease out your space? Our rental services provide clients with a wide selection of homes, apartments, and commercial spaces that match their needs.</p>
            </div>

            <div className="project-card">
                <h3> 
                Investment Opportunities: </h3>
                <p>We offer lucrative investment options in residential, commercial, and industrial properties, helping clients make smart decisions with high returns on investment.</p>
            </div>

        </div>
    </section>
);

export default Projects;
