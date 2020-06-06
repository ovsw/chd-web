import React from 'react'
import {Link} from 'gatsby'

const HomeBoxes = () => {
  return (
    <section>
      <div className='container-fluid pt-0'>
        <div className='section-content'>
          <div className='row equal-height-inner mt-sm-0'>

            <div className='col-sm-12 col-md-4 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay2'>
              <div className='sm-height-auto bg-theme-colored-darker3'>
                <div className='text-center pt-30 pb-sm-20 pb-20'>
                  <div className='icon-box text-center'>
                    <a className='icon bg-silver-light icon-circled' href='tel:480-659-7800'> <i className='icon_calendar text-theme-colored2' /> </a>
                    <h3 className='text-white'><a href='tel:480-659-7800' style={{color: 'white'}}>Schedule Appointment</a></h3>
                    <p><a className='text-white' href='tel:480-659-7800'><i className='fa fa-phone text-theme-white' style={{fontSize: '18px'}} /> 480-659-7800</a></p>
                    <a href="<?=$pages->get('1288')->url?>" className='btn btn-default btn-transparent mt-20'>Online &nbsp;<i className='fa fa-arrow-circle-right' style={{fontSize: '1rem'}} /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay3'>
              <div className='sm-height-auto bg-theme-colored-darker5'>
                <div className='text-center pt-30 pb-sm-20 pb-20'>
                  <div className='icon-box text-center'>
                    <a className='icon bg-silver-light icon-circled' href="<?=$pages->get('2535')->url?>"> <i className='icon_star text-theme-colored2' /> </a>
                    <h3 className='text-white'>Testimonials</h3>
                    <p className='text-white'>What our patients are saying</p>
                    <a href="<?=$pages->get('2535')->url?>" className='btn btn-default btn-transparent mt-20'>Read on &nbsp;<i className='fa fa-arrow-circle-right' style={{fontSize: '1rem'}} /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4 pl-0 pl-sm-15 pr-0 pr-sm-15 sm-height-auto mt-sm-0 wow fadeInLeft animation-delay4'>
              <div className='sm-height-auto bg-theme-colored-darker9'>
                <div className='text-center pt-30 pb-sm-20 pb-20'>
                  <div className='icon-box text-center'>
                    <a className='icon bg-silver-light icon-circled' href='https://www.google.com/maps/place/Shumway+Dental+Care/@33.2606181,-111.793337,17z/data=!4m7!3m6!1s0x872bab3dfd777459:0xe0d105b5470650c!8m2!3d33.2606181!4d-111.7911483!9m1!1b1' target='_blank'> <i className='fa fa-phone  text-theme-colored2' /> </a>
                    <h3 className='text-white'><a href='https://www.google.com/maps/place/Shumway+Dental+Care/@33.2606181,-111.793337,17z/data=!4m7!3m6!1s0x872bab3dfd777459:0xe0d105b5470650c!8m2!3d33.2606181!4d-111.7911483!9m1!1b1' style={{color: 'white'}} target='_blank'>Leave a Review</a></h3>
                    <p className='text-white'><a href='https://www.google.com/maps/place/Shumway+Dental+Care/@33.2606181,-111.793337,17z/data=!4m7!3m6!1s0x872bab3dfd777459:0xe0d105b5470650c!8m2!3d33.2606181!4d-111.7911483!9m1!1b1' style={{color: 'white'}} target='_blank'>On Google</a></p>
                    <a href='https://www.google.com/maps/place/Shumway+Dental+Care/@33.2606181,-111.793337,17z/data=!4m7!3m6!1s0x872bab3dfd777459:0xe0d105b5470650c!8m2!3d33.2606181!4d-111.7911483!9m1!1b1' className='btn btn-default btn-transparent mt-20' target='_blank'>Reviews &nbsp;<i className='fa fa-arrow-circle-right' style={{fontSize: '1rem'}} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBoxes
