import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import SocialLinks from '../components/social-links'

const Footer = () => {
  const {footerBg} = useStaticQuery(
    graphql`
    query {
      footerBg: file(relativePath: { eq: "bg/footer-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    `
  )

  const backgroundFluidImageStack = [
    footerBg.childImageSharp.fluid,
    'linear-gradient(rgba(3, 27, 56, 0.8), rgba(3, 27, 56, 0.8))'
  ].reverse()

  return (
    <>
      <footer id='footer' className='footer bg-black-111'>
        <div className='container pt-70 pb-40'>
          <div className='row border-bottom-black'>
            <div className='col-sm-6 col-md-3'>
              <div className='widget dark'>
                <img className='mt-10 mb-20' alt='' src='/site/templates/images/logo-wide-white.png' />
                <p>We are a general family dentist office that takes great pride in how we treat our patients and the excellence in dentistry we strive to achieve.</p>
                <ul className='list-inline mt-5'>
                  <li className='m-0 pl-10 pr-10'> <i className='fa fa-map-marker text-theme-colored mr-5' /> <a className='text-gray' href='https://goo.gl/maps/txA8kE6xEFT2' target='_blank'>3150 S Gilbert Rd #1 <br />Chandler, AZ 85286, USA</a> </li>
                  <li className='m-0 pl-10 pr-10'> <i className='fa fa-phone text-theme-colored mr-5' /> <a className='text-gray' href='tel:480-659-7800'>480-659-7800</a> </li>
                  <li className='m-0 pl-10 pr-10'> <i className='fa fa-fax text-theme-colored mr-5' /> <a className='text-gray' href='tel:480-820-5677'>480-820-5677</a> </li>
                  <li className='m-0 pl-10 pr-10'> <i className='fa fa-globe text-theme-colored mr-5' /> <a className='text-gray' href='https://mychandlerdentists.com'>mychandlerdentists.com</a> </li>
                </ul>
              </div>

            </div>
            <div className='col-sm-6 col-md-3'>
              <div className='widget dark'>
                <h5 className='widget-title line-bottom'>Useful Links</h5>
                <ul className='list-border'>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/contact-us/'>Contact</a></li>
                  <li><a href='/location-map-and-directions/'>Map &amp; Directions</a></li>
                  <li><a href='/privacy-policy/'>Disclaimer</a></li>
                  <li><a href='/about-us/ada-compliance/'>ADA Compliance</a></li>
                  <li><a href='/sitemap/'>Sitemap</a></li>

                </ul>
              </div>

            </div>
            <div className='col-sm-6 col-md-3'>
              {/* <div className='widget dark'>
                <h5 className='widget-title line-bottom'>Latest Articles</h5>
                <div className='latest-posts'>
                  <article className='post media-post clearfix pb-0 mb-10'>
                    <a href='/coronavirus/' className='post-thumb'><img alt='Coronavirus Safety Measures' src='/site/assets/files/2555/dental-tool-sterilization-autoclave.80x55.jpg' /></a>
                    <div className='post-right'>
                      <h5 className='post-title mt-0 mb-5'><a href='/coronavirus/'>Coronavirus Safety Measures</a></h5>
                      <p className='post-date mb-0 font-12'>16 Mar</p>
                    </div>
                  </article>
                  <article className='post media-post clearfix pb-0 mb-10'>
                    <a href='/dental-care-tips-for-older-adults/' className='post-thumb'><img alt='Dental Care Tips for Older Adults' src='/site/assets/files/2554/senior-eating-apple.80x55.jpg' /></a>
                    <div className='post-right'>
                      <h5 className='post-title mt-0 mb-5'><a href='/dental-care-tips-for-older-adults/'>Dental Care Tips for Older Adults</a></h5>
                      <p className='post-date mb-0 font-12'>14 Feb</p>
                    </div>
                  </article>
                  <article className='post media-post clearfix pb-0 mb-10'>
                    <a href='/can-popcorn-lead-to-aheart-infection/' className='post-thumb'><img alt='Can Popcorn Lead to a Heart Infection?' src='/site/assets/files/2553/salt-popcorn-in-a-basket-p4sv88q.80x55.jpg' /></a>
                    <div className='post-right'>
                      <h5 className='post-title mt-0 mb-5'><a href='/can-popcorn-lead-to-aheart-infection/'>Can Popcorn Lead to a Heart Infection?</a></h5>
                      <p className='post-date mb-0 font-12'>24 Jan</p>
                    </div>
                  </article>
                </div>
              </div> */}
            </div>

            <div className='col-sm-6 col-md-3'>
              <div className='widget dark'>
                <h5 className='widget-title line-bottom'>Opening Hours</h5>
                <div className='opening-hours'>
                  <ul className='list-border'>
                    <li className='clearfix'> <span> Mon:  </span>
                      <div className='value pull-right flip'> 7:00 am - 3:00 pm </div>
                    </li>
                    <li className='clearfix'> <span>Tues - Wed :</span>
                      <div className='value pull-right flip'> 8:00 am - 5:00 pm </div>
                    </li>
                    <li className='clearfix'> <span> Thurs: </span>
                      <div className='value pull-right flip'> 7:00 am - 4:00 pm </div>
                    </li>
                    <li className='clearfix'> <span> Fri: </span>
                      <div className='value pull-right flip'>  7:00 am - 3:00 pm </div>
                    </li>
                    <li className='clearfix'> <span> Sat - Sun : </span>
                      <div className='value pull-right flip'> Closed </div>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='footer-bottom bg-black-222'>
          <div className='container pt-10 pb-0'>
            <div className='row'>
              <div className='col-md-6 sm-text-center'>
                <p className='font-13 text-black-777 m-0'>Copyright &copy; {new Date().getFullYear()} &copy; Shumway Dental Care. All Rights Reserved | Website by <a href='https://ovswebsites.com'>OVS Websites</a></p>
              </div>
              <div className='col-md-6 text-right flip sm-text-center'>
                <div className='widget no-border m-0'>
                  <ul className='styled-icons icon-dark icon-circled icon-sm'>
                    <li><a href='https://www.facebook.com/mychandlerdentists'><i className='fa fa-facebook' /></a></li>
                    <li><a href='https://www.twitter.com/ShumwayDental'><i className='fa fa-twitter' /></a></li>
                    <li><a href='https://www.youtube.com/user/ShumwayDentalCare/featured'><i className='fa fa-youtube' /></a></li>
                    <li><a href='http://plus.google.com/+Mychandlerdentists/posts'><i className='fa fa-google-plus' /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
