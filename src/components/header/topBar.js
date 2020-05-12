import React from 'react'
import {Link} from 'gatsby'

const TopBar = () => {
  return (
    <div className='header-top bg-light sm-text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 pb-10 pt-10 pb-sm-0'>
            <i className='fa fa-star-o text-theme-colored' /> Chandler Dentist 85286: Shumway Dental Care Family, Cosmetic
          </div>
          <div className='col-md-6 pb-10 pt-10 pt-sm-0 clearfix sm-text-center'>

            <ul className='styled-icons  icon-sm pull-right sm-pull-none custom-header-icons' style={{marginLeft: '1rem'}}>
              <li><a href='https://www.facebook.com/mychandlerdentists'><i className='fa fa-facebook' /></a></li>
              <li><a href='https://www.twitter.com/ShumwayDental'><i className='fa fa-twitter' /></a></li>
              <li><a href='https://www.youtube.com/user/ShumwayDentalCare/featured'><i className='fa fa-youtube' /></a></li>
              <li><a href='http://plus.google.com/+Mychandlerdentists/posts'><i className='fa fa-google-plus' /></a></li>
            </ul>
            <a href='tel:1-480-659-7800' className='pull-right sm-pull-none'><i className='fa fa-phone text-theme-colored' /> Call Us at 480-659-7800</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
