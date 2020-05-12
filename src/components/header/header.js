import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

// import Icon from './icon'
// import {cn} from '../lib/helpers'

import TopBar from './topBar'
import MainNav from './mainNav'
import MobileNav from './mobileNav'

const Header = ({doHideNav, doShowNav, showNav, siteTitle}) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteNav {
              title
              slug
              children {
                title
                slug
              }
            } 
          }
        }
      }
    `
  )

  const {siteMetadata: {siteNav}} = site

  return (
    <header id='header' className='header'>
      <TopBar />
      <MainNav navStructure={siteNav} />
    </header>
  )
}

export default Header
