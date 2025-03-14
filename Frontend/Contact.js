import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'; // 

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', form);
            alert('Message sent successfully');
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            alert('Error sending message');
        }
    };

    return (
        <>
       

<section id='contact' className='contact-section'> 

    <div className='image'>
       
        <img src='https://images.pexels.com/photos/3779670/pexels-photo-3779670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='CONTACT US'></img>
        <div class='text-overlay'> Contact Us</div>
    </div>
       <h2>
        Buy Your Dream House Now!
       </h2>

        <form onSubmit={handleSubmit}>
            <p> Full Name </p>
            <input
                type="text"
                placeholder=" Enter Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

<p> Email </p>
            <input
                type="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <p> Your Message </p>
            <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit">Send</button>
        </form>
        
        </section>
        </>
    );
};

export default Contact;
