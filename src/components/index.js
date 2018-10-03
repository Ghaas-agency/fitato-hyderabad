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
          <meta name="description" content="Fitato&reg; is Your One Pass to 250+ Best Gyms & Fitness Studios in Pune. Access All Gyms, Dance, Yoga, Crossfit and Swimming Near You - One Pass @ ₹1199" />
          <script type="text/javascript">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M6HNZB');
          `}</script>
          <link rel="shortcut icon" type="image/png" href={withPrefix('/static/fitato-icon-16.png')}></link>
          <link rel="apple-touch-icon" href={withPrefix('/static/fitato-icon-57.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={withPrefix('/static/fitato-icon-72.png')} />
          <link rel="apple-touch-icon" sizes="114x114" href={withPrefix('/static/fitato-icon-114.png')} />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700" rel="stylesheet" />
        </Helmet>
        <noscript>{`
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6HNZB" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}</noscript>
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
