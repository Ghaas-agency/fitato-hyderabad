import React from 'react'

const ContactForm = () => (
  <form action="https://formspree.io/support@fitato.fit" method="POST" className="partial-contact-form">
    <div><input type="text" name="name" placeholder="Name" required /></div>
    <div><input type="tel" name="phone" placeholder="Phone" required /></div>
    <div><input type="email" name="_replyto" placeholder="Email" required /></div>
    <input type="hidden" name="_subject" value="Contact form submission" />
    <input type="hidden" name="_cc" value="connect@fitato.fit" />
    <div><input type="submit" value="Submit" /></div>
  </form>
)

export default ContactForm
