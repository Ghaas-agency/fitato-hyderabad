import React from 'react'
import Link from 'gatsby'

const GetStarted = () => (
  <div className="partial-get-started">
    <div className="container">
      <div className="partial-get-started__text">
        <h2><span className="red">Ready to get started?</span><br />Download the Fitato app or get in touch.</h2>
      </div>
      <div className="partial-get-started__cta">
        <a href="https://fitato.app.link/6CvYxe0W9L" className="button">Download now</a>
        <Link to="/contact" className="button-inverted">Contact us</Link>
      </div>
    </div>
  </div>
)

export default GetStarted
