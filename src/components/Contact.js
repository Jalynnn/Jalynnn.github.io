import '../CSS/Contact.css'
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section-contact">
        <div className="contact-content">
            <h2 className="contact-heading">Contact</h2>
            <form action="https://formspree.io/f/movadbay" method="post">
                <input type="text" name="Name" required placeholder="Name"/>
                <input name="Email" id="email" type="email" required placeholder="Email"/>
                <textarea name="Message" required placeholder="Message" className="message"></textarea>
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>

    </section>
  );
}

export default Contact;
