import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

import { withPrefix } from 'gatsby-link';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet defaultTitle={data.site.siteMetadata.title}>
          <meta charset="utf-8" />
          <meta name="description" content="Fitato® is Your One Pass to 250+ Best Gyms &amp; Fitness Studios in Pune. Access All Gyms, Dance, Yoga, Crossfit and Swimming Near You - One Pass @ ₹1199"/>
          <meta name="image" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta itemprop="name" content="Fitato®: Best Gyms in Pune | One Pass to Fitness"/>
          <meta itemprop="description" content="Fitato® is Your One Pass to 250+ Best Gyms &amp; Fitness Studios in Pune. Access All Gyms, Dance, Yoga, Crossfit and Swimming Near You - One Pass @ ₹1199"/>
          <meta itemprop="image" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta name="apple-itunes-app" content="app-id=1300323768"/>
          <meta name="google-play-app" content="app-id=fit.fitato.health"/>
          <meta name="twitter:card" content="app"/>
          <meta name="twitter:title" content="Fitato®: Best Gyms in Pune | One Pass to Fitness"/>
          <meta name="twitter:description" content="Fitato® is Your One Pass to 250+ Best Gyms &amp; Fitness Studios in Pune. Access All Gyms, Dance, Yoga, Crossfit and Swimming Near You - One Pass @ ₹1199"/>
          <meta name="twitter:site" content="@FitatoFit"/>
          <meta name="twitter:creator" content="@FitatoFit"/>
          <meta name="twitter:image:src" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta name="twitter:app:id:iphone" content="1300323768"/>
          <meta name="twitter:app:name:iphone" content="Fitato"/>
          <meta name="twitter:app:id:googleplay" content="fit.fitato.health"/>
          <meta name="twitter:app:name:googleplay" content="Fitato: One Pass to Fitness"/>
          <meta name="og:title" content="Fitato®: Best Gyms in Pune | One Pass to Fitness"/>
          <meta name="og:description" content="Fitato® is Your One Pass to 250+ Best Gyms &amp; Fitness Studios in Pune. Access All Gyms, Dance, Yoga, Crossfit and Swimming Near You - One Pass @ ₹1199"/>
          <meta name="og:image" content="https://www.fitato.fit/static/fitato-one-pass-to-all.jpg"/>
          <meta name="og:url" content="https://www.fitato.fit"/>
          <meta name="og:site_name" content="Fitato"/>
          <meta name="og:type" content="website"/>
          <meta name="al:ios:app_store_id" content="1300323768"/>
          <meta name="al:ios:app_name" content="Fitato"/>
          <meta name="al:android:package" content="fit.fitato.health"/>
          <meta name="al:android:app_name" content="Fitato: One Pass to Fitness"/>

          <script type="text/javascript">{`!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-M6HNZB",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer");`}</script>
          <link rel="shortcut icon" type="image/png" href={withPrefix('/static/fitato-icon-16.png')}></link>
          <link rel="apple-touch-icon" href={withPrefix('/static/fitato-icon-57.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={withPrefix('/static/fitato-icon-72.png')} />
          <link rel="apple-touch-icon" sizes="114x114" href={withPrefix('/static/fitato-icon-114.png')} />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i" rel="stylesheet" />
        </Helmet>
        <noscript>{`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6HNZB" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}</noscript>
        <Header />
        <div className="main-header-placeholder" />
        <div>
          {children}
        </div>
        <Footer />
        <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14.0.0/dist/smooth-scroll.polyfills.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var scroll = new SmoothScroll('a[href*="#"]', {
              offset: 80,
              easing: 'easeInOutCubic',
            });
            `,
          }}
        />
        {/* <script src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"></script> */}
      </>
    )}
  />
)
