import React from 'react';
import './forSale.css';

const ForSale = () => (
    <>
    <div className='image'>
       
       <img src='https://images.pexels.com/photos/7031621/pexels-photo-7031621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='CONTACT US'></img>
       <div class='text-overlay'> For Sale</div>
   </div>
    <div className="for-sale-container">
        <h1 className="for-sale-title">Properties for Sale</h1>
        <p className="for-sale-intro">
            Discover properties to call your own. Whether you're looking for your dream home or an investment opportunity, Leghari Properties has you covered.
        </p>

        <div className="sale-list">
            <div className="sale-item">
                <img src="https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Luxury Villa" className="sale-image" />
                <h2>Luxury Villa with Private Pool</h2>
                <p>5 Beds | 4 Baths | 4000 sq. ft.</p>
                <p className="price">PKR 25,000,000</p>
            </div>
            <div className="sale-item">
                <img src="https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Modern Apartment" className="sale-image" />
                <h2>Modern Apartment in Uptown</h2>
                <p>3 Beds | 2 Baths | 1500 sq. ft.</p>
                <p className="price">PKR 12,000,000</p>
            </div>
            <div className="sale-item">
                <img src="https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Commercial Space" className="sale-image" />
                <h2>Commercial Space in Prime Location</h2>
                <p>3000 sq. ft. | Open Floor Plan</p>
                <p className="price">PKR 35,000,000</p>
            </div>
        </div>
    </div>
    </>
);

export default ForSale;
