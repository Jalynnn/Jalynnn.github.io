import '../CSS/Contact.css'
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section-contact">
        <video autoplay muted loop id="contact-video">
            <source src={`${process.env.PUBLIC_URL}/videos/Untitled (4).mp4`} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="contact-content">
            <h2 className="contact-heading">Contact</h2>
            <form action="https://formspree.io/f/movadbay" method="post">
                <input type="text" name="Name" required placeholder="Name"/>
                <input name="Email" id="email" type="email" required placeholder="Email"/>
                <textarea name="Message" required placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>

    </section>
  );
}

export default Contact;
