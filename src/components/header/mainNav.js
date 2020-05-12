import React from 'react'
import {Link} from 'gatsby'

import styles from './mainNav.module.css'

const MainNav = ({navStructure}) => {
  return (
    <>
      {/* <nav className={`${styles.mainNav} in-navigation`}>
        <ul>
          {navStructure.map(({title, slug, children}) =>
            <li key={slug} className={children.length > 0 ? 'in-dropdown' : ''}>
              <Link to={slug} activeStyle={{color: 'red'}} partiallyActive>{title}</Link>
              {children.length > 0 &&
                <ul>
                  {children.map(({title, slug}) =>
                    <li key={slug}><Link to={slug} activeStyle={{color: 'red'}} partiallyActive>{title}</Link></li>
                  )}
                </ul>}
            </li>)}

        </ul>
      </nav> */}

      <div className='header-nav'>
        <div className='header-nav-wrapper navbar-scrolltofixed bg-white scroll-to-fixed-fixed'>
          <div className='header-topbar'>
            <div className='container' />
          </div>
          <div className='container'>
            <nav id='menuzord-right' className='menuzord purple no-bg menuzord-responsive'>
              <a href='#' className='showhide' style={{display: 'none'}}><em /><em /><em /></a>
              <a className='menuzord-brand pull-left flip mb-15' href='/'><img src='/images/logo-wide.png' alt='Shumway Dental Care' /></a>

              <ul className='menuzord-menu menuzord-right menuzord-indented scrollable' style={{maxHeight: '400px', display: 'block'}}>
                <li><a href='/'>Home</a></li>
                <li className='parent'>
                  <a href='#'>Services<span className='indicator'><i className='fa fa-angle-down' /></span></a>
                  <div className='megamenu' style={{right: '0px'}}>
                    <div className='megamenu-row'>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'> </h4>
                        <a href='#'><img src='/site/assets/files/1/mar-2019.200x0.jpg' alt='' /></a>
                      </div>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'>General</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/childrens-dentistry/'>Children’s Dentistry</a></li>
                          <li className=''><a href='/professional-dental-cleaning/'>Cleaning</a></li>
                          <li className=''><a href='/porcelain-crowns/'>Crowns</a></li>
                          <li className=''><a href='/fillings/'>Fillings</a></li>
                          <li className=''><a href='/dental-inlays-and-onlays/'>Inlays and Onlays</a></li>
                          <li className=''><a href='/sensitive-teeth/'>Sensitive Teeth</a></li>
                          <li className=''><a href='/gingivitis-and-gum-disease/'>Gingivitis and Gum Disease</a></li>
                          <li className=''><a href='/emergency-dentist-in-chandler/'>Emergency Dentist in Chandler</a></li>
                        </ul>
                      </div>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'>Cosmetic Dentistry</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/invisalign/'>Invisalign</a></li>
                          <li className=''><a href='/lumineers/'>Lumineers</a></li>
                          <li className=''><a href='/teeth-whitening-info/'>Teeth Whitening</a></li>
                        </ul>
                        <h4 className='megamenu-col-title'>Dental Restorations</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/bridges/'>Bridges</a></li>
                          <li className=''><a href='/dental-implants/'>Dental Implants</a></li>
                        </ul>
                      </div>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'>Specialty</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/dental-sedation/'>Dental Sedation</a></li>
                          <li className=''><a href='/sleep-apnea-snorring/'>Sleep Apnea / Snoring</a></li>
                          <li className=''><a href='/tmj-jaw-pain/'>TMJ / Jaw Pain</a></li>
                          <li className=''><a href='/dentures/'>Full and Partial Dentures</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='parent'>
                  <a href='/about-us/'>About Us<span className='indicator'><i className='fa fa-angle-down' /></span></a>
                  <ul className='dropdown' style={{right: 'auto'}}>
                    <li><a href='/about-us/andrew-shumway-chandler-dentist/'>Meet Dr. Andy</a></li>
                    <li><a href='/about-us/joel-shumway-chandler-dentist/'>Meet Dr. Joel</a></li>
                    <li><a href='/about-us/meet-dr-tyler/'>Meet Dr. Tyler</a></li>
                    <li><a href='/about-us/our-dental-team/'>Our Team</a></li>
                    <li><a href='/about-us/our-office/'>Our Office</a></li>
                    <li><a href='/about-us/testimonials-reviews/'>Reviews</a></li>
                    <li><a href='/about-us/ada-compliance/'>ADA Compliance</a></li>
                  </ul>
                </li>
                <li className='parent'>
                  <a href='#'>Patient Info<span className='indicator'><i className='fa fa-angle-down' /></span></a>
                  <ul className='dropdown' style={{right: 'auto'}}>
                    <li><a href='/patient-information/advanced-dental-technology/'>Advanced Dental Technology</a></li>
                    <li><a href='/patient-information/financial-options/'>Financial Options</a></li>
                    <li><a href='/patient-information/patient-protection-and-comfort/'>Patient Protection and Comfort</a></li>
                    <li><a href='/patient-information/services-overview/'>Services Overview</a></li>
                    <li><a href='/patient-information/medical-history-form/'>Medical History Form</a></li>
                    <li><a href='/patient-information/smile-assessment-form/'>Smile Assessment Form</a></li>
                  </ul>
                </li>
                <li><a href='/location-map-and-directions/'>Directions</a></li>
                <li className='parent'>
                  <a href='#'>Blog<span className='indicator'><i className='fa fa-angle-down' /></span></a>
                  <div className='megamenu' style={{right: 'auto'}}>
                    <div className='megamenu-row'>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'>General Dentistry</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/coronavirus/'>Coronavirus Safety Measures</a></li>
                          <li className=''><a href='/dental-care-tips-for-older-adults/'>Dental Care Tips for Older Adults</a></li>
                          <li className=''><a href='/autoimmune-disorders-and-your-oral-health/'>Autoimmune Disorders and Your Oral Health</a></li>
                          <li className=''><a href='/informed-consent-dental-procedures/'>Informed Consent for Dental Procedures</a></li>
                          <li className=''><a href='/why-replace-a-missing-tooth/'>Why You Should Replace a Missing Tooth</a></li>
                          <li className=''><a href='/your-highly-trained-dental-hygienist/'>Your Highly Trained Dental Hygienist</a></li>
                          <li className=''><a href='/10-effective-ways-to-remineralize-teeth/'>10 Effective Ways to Remineralize Teeth</a></li>
                          <li className=''><a href='/dental-emergency-signs/'>5 Dental Emergency Signs - Call Our Office Now</a></li>
                          <li className=''><a href='/avoid-getting-cavities/'>How to Avoid Getting Cavities: Must-Know Tips</a></li>
                          <li className=''><a href='/best-whitening-toothpaste-review/'>The Best Whitening Toothpaste Review</a></li>
                        </ul>
                        <h4 className='megamenu-col-title' />
                        <ul className='list-dashed list-icon' />
                      </div>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'>Cosmetic Dentistry</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/why-replace-a-missing-tooth/'>Why You Should Replace a Missing Tooth</a></li>
                          <li className=''><a href='/dental-implant-process/'>The Dental Implant Procedure Explained</a></li>
                          <li className=''><a href='/teeth-yellowing/'>Yellow Teeth: The Most Common Causes</a></li>
                          <li className=''><a href='/confident-smile/'>Take Selfies with a Confident Smile</a></li>
                          <li className=''><a href='/retainer-care/'>The Best Ways to Care for a Retainer</a></li>
                          <li className=''><a href='/top-questions-about-teeth-whitening/'>Top Questions Patients Ask About Teeth Whitening</a></li>
                          <li className=''><a href='/avoid-teeth-stains/'>How to Avoid Teeth Stains Effectively</a></li>
                          <li className=''><a href='/teeth-whitening-procedure/'>Teeth Whitening - Is It Necessary?</a></li>
                          <li className=''><a href='/correcting-bite-problems/'>Correcting Bite Problems</a></li>
                          <li className=''><a href='/making-dental-care-fun-for-kids/'>Making Dental Care Fun for Kids</a></li>
                        </ul>
                      </div>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'>Children's Dentistry</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/dental-care-activities-toddlers/'>Fun Dental Care Activities for Toddlers</a></li>
                          <li className=''><a href='/tooth-brushing-fun-kids/'>Making Tooth Brushing Fun for Kids</a></li>
                          <li className=''><a href='/keeping-retainer-kids-mouth/'>Keeping That Retainer in Your Kid's Mouth</a></li>
                          <li className=''><a href='/flossing-teeth-teach-child-right-way/'>Flossing Teeth - Teach Your Child the Right Way</a></li>
                          <li className=''><a href='/thumbsucking/'>Thumbsucking - How It Affects a Child's Teeth</a></li>
                          <li className=''><a href='/pacifier-safety-tips/'>Pacifier Safety Tips for Your Baby</a></li>
                          <li className=''><a href='/baby-bottle-tooth-decay/'>Ways to Prevent Baby Bottle Tooth Decay</a></li>
                        </ul>
                      </div>
                      <div className='col3'>
                        <h4 className='megamenu-col-title'>Sedation Dentistry</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/how-nitrous-oxide-works-at-the-dentists-office/'>How Nitrous Oxide Works at the Dentist's Office</a></li>
                          <li className=''><a href='/dental-anxiety/'>Dental Anxiety - Are You Scared of the Dentist?</a></li>
                          <li className=''><a href='/sedation-dentristry-fearful-patients/'>Scared of the Dentist? We Offer Sedation</a></li>
                        </ul>
                        <h4 className='megamenu-col-title'>Restorations</h4>
                        <ul className='list-dashed list-icon'>
                          <li className=''><a href='/why-replace-a-missing-tooth/'>Why You Should Replace a Missing Tooth</a></li>
                          <li className=''><a href='/10-effective-ways-to-remineralize-teeth/'>10 Effective Ways to Remineralize Teeth</a></li>
                          <li className=''><a href='/dental-implant-process/'>The Dental Implant Procedure Explained</a></li>
                          <li className=''><a href='/receding-gum-line/'>I Have a Receding Gum Line - Now What?</a></li>
                          <li className=''><a href='/about-dental-bridge/'>How Long Will a Dental Bridge Last?</a></li>
                          <li className=''><a href='/burning-mouth-syndrome/'>What is Burning Mouth Syndrome?</a></li>
                          <li className=''><a href='/canker-sores-effective-ways-heal/'>Canker Sores - Effective Ways to Heal Them</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href='/schedule-an-appointment/'>Appointments</a></li>
                <li><a href='/contact-us/'>Contact</a></li>
                <li className='scrollable-fix' />
              </ul>
            </nav>
          </div>
        </div>
        <div style={{display: 'block', width: '1232px', height: '72px', float: 'none'}} />
      </div>
    </>
  )
}

export default MainNav
