import React from 'react';
import './forRent.css';

const ForRent = () => (
    <>

<div className='image'>
       
       <img src='https://images.pexels.com/photos/7031621/pexels-photo-7031621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='CONTACT US'></img>
       <div class='text-overlay'> For Rent</div>
   </div>
    <div className="for-rent-container">
        <h1 className="for-rent-title">Properties for Rent</h1>
        <p className="for-rent-intro">
            Find your perfect rental property. At Leghari Properties, we offer a range of houses, apartments, and commercial spaces to suit your needs.
        </p>

        <div className="rental-list">
            <div className="rental-item">
                <img src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern Apartment" className="rental-image" />
                <h2>Modern Apartment in City Center</h2>
                <p>2 Beds | 2 Baths | 1200 sq. ft.</p>
                <p className="price">PKR 50,000/month</p>
            </div>
            <div className="rental-item">
                <img src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Spacious House" className="rental-image" />
                <h2>Spacious House in Suburban Area</h2>
                <p>4 Beds | 3 Baths | 2500 sq. ft.</p>
                <p className="price">PKR 100,000/month</p>
            </div>
            <div className="rental-item">
                <img src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Office Space" className="rental-image" />
                <h2>Prime Office Space in Business District</h2>
                <p>1500 sq. ft. | Open Floor Plan</p>
                <p className="price">PKR 200,000/month</p>
            </div>
        </div>
    </div>
    
    </>
);

export default ForRent;
