import React from 'react'
import { withPrefix } from 'gatsby'

const DownloadSwipe = () => (
  <div className="partial-download-swipe" style={{backgroundImage: 'url(' + withPrefix('/static/fitness-bg.png') + ')' }}>
    <div className="container">
      <div className="partial-download-swipe__left">
        <h2>One pass to the best workouts the city has to offer!</h2>
        {/* <AppIcons /> */}
      </div>
      <div className="partial-download-swipe__right">
        <img src={withPrefix('/static/fitato-app.png')} alt="download fitato smartphone app"/>
      </div>
    </div>
  </div>
)

export default DownloadSwipe
