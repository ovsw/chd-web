import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'

// import 'bootstrap/dist/css/bootstrap.css'
// import '../styles/icons.css'
// import '../styles/slick.css'
// import '../styles/main.css'

// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/bootstrap.min.css'
import '../styles/slick.css'

import '../styles/animate.css'
// import '../styles/css-plugin-collections.css'

import '../styles/menuzord-megamenu.css'

import '../styles/style-main.css'
import '../styles/custom-bootstrap-margin-padding.css'

import '../styles/responsive.css'
import '../styles/style.css'
import '../styles/colors/theme-skin-color-set6.css'

const Layout = ({children, doHideNav, doShowNav, showNav, siteTitle}) => (
  <div id='wrapper' className='wrapper'>
    <Helmet>
      <body className='fullwidth-page' />
    </Helmet>
    <Header
      siteTitle={siteTitle}
      showNav={showNav}
      doShowNav={doShowNav}
      doHideNav={doHideNav}
    />
    {/* Page Conttent */}
    {children}
    <Footer />
  </div>
)

export default Layout
