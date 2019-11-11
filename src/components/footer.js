import React from 'react'

import '../css/footer.css'

var d = new Date();

const Footer = () => (
  <div className="footer-copyright">
    <div className="container">
      <p className="footer-contact-links">Call us for any queries:<br /><a href="tel:+918448448546">+91 84484 48546</a></p>
      <small>&copy; {d.getFullYear()} Fitato Health Solutions Private Limited.</small>
      <div>
        <small>
          <a href="https://fitato.fit/privacy-policy">Privacy Policy</a>
        </small>
      </div>
    </div>
  </div>
)

export default Footer
