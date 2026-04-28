import '../CSS/contact.css'
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section-contact">
        <div className="contact-content">
            <h2 className="contact-heading">Contact</h2>
            <h2 className="subcaption">For those of you who prefer Human-to-Human Interaction, send me an email here: </h2>
            <form action="https://formspree.io/f/movadbay" method="post">
                <input type="text" name="Name" required placeholder="Your Name"/>
                <input name="Email" id="email" type="email" required placeholder="Your Email"/>
                <textarea name="Message" required placeholder="Your Message" className="message"></textarea>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>

    </section>
  );
}

export default Contact;
