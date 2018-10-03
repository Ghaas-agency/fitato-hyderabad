import React from 'react'

import '../css/footer.css'

var d = new Date();

const Footer = () => (
  <div className="footer-copyright">
    <div className="container">
      <p className="footer-contact-links">Call us for any queries:<br /><a href="tel:+917993604033">+91 7993604033</a><a href="tel:+919977313509">+91 9977313509</a></p>
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
