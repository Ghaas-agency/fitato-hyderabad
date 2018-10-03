import React from 'react'
import Link, { withPrefix } from 'gatsby'
import SocialLinks from './SocialLinks'
import ContactLinks from './ContactLinks'

const FooterInfo = () => (
  <div className="footer-info" style={{backgroundImage: 'url(' + withPrefix('/static/footer-bg.webp') + ')'}}>
    <div className="container">
      <div className="footer-info__col1">
        <h4>Own a Facility? Become a Partner</h4>
        <p>Own a gym? or a fitness studios? Expand your business with Fitato by growing your clientele, increasing revenue and brand exposure. Fitato helps in better utilization of your facility as well as a significant increase in revenue.<br /><Link to="/become-a-partner">Become a partner today</Link>.</p>
      </div>
      <div className="footer-info__col2">
        <h4>Learn More</h4>
        <ul className="footer-ul">
          <li><a href="http://blog.fitato.fit">Blog</a></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/workplace">Fitato for Workplace</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="footer-info__col3">
        <h4>Contact</h4>
        <ContactLinks cname="footer-ul" />
        <SocialLinks cname="footer-social" />
      </div>
    </div>
  </div>
)

export default FooterInfo
