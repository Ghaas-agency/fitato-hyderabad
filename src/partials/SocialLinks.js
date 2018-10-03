import React from 'react'
import { withPrefix } from 'gatsby'

const SocialLinks = props => (
  <ul className={props.cname}>
    <li>
      <a href="https://www.facebook.com/Fitato.fit/" target="_blank" rel="noopener">
        <img src={withPrefix('/static/icons/facebook.png')} />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/fitatofit" target="_blank" rel="noopener">
        <img src={withPrefix('/static/icons/twitter.png')} />
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/+FitatoFitness" target="_blank" rel="noopener">
        <img src={withPrefix('/static/icons/googleplus.png')} />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=pKC3-oPRudA" target="_blank" rel="noopener">
        <img src={withPrefix('/static/icons/youtube.png')} />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/fitato_fit/" target="_blank" rel="noopener">
        <img src={withPrefix('/static/icons/instagram.png')} />
      </a>
    </li>
  </ul>
);

export default SocialLinks