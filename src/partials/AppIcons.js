import React from 'react'
import { withPrefix } from 'gatsby'

const AppIcons = () => (
  <span className="partial-app-icons">
    <a href="https://play.google.com/store/apps/details?id=fit.fitato.health&hl=en" target="_blank" rel="noopener noreferrer">
      <img src={withPrefix('/static/icons/google-play-store.svg')} className="partial-app-icon" alt="fitato on google play store" />
    </a>
    <a href="https://itunes.apple.com/in/app/fitato/id1300323768?mt=8" target="_blank" rel="noopener noreferrer">
      <img src={withPrefix('/static/icons/apple-app-store.svg')} className="partial-app-icon" alt="fitato on app store" />
    </a>
  </span>
)

export default AppIcons
