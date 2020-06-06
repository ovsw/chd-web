import React from 'react'
// import Slider from 'react-slick'
import {Link, useStaticQuery, graphql} from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
// import Img from 'gatsby-image'

import styles from './index.module.css'

// function NextArrow (props) {
//   const {onClick} = props
//   return (
//     <button onClick={onClick} className='in-sliderarrow-arrow in-sliderarrow-next'><i className='zmdi zmdi-chevron-right' /></button>
//   )
// }

// function PrevArrow (props) {
//   const {onClick} = props
//   return (
//     <button onClick={onClick} className='in-sliderarrow-arrow in-sliderarrow-prev'><i className='zmdi zmdi-chevron-left' /></button>
//   )
// }

const Hero = () => {
  // const settings = {
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: false,
  //   dots: false,
  //   arrows: true,
  //   prevArrow: <PrevArrow />,
  //   nextArrow: <NextArrow />,
  //   fade: true,
  //   adaptiveHeight: true
  // }

  const {heroBG} = useStaticQuery(
    graphql`
    query {
      heroBG: file(relativePath: { eq: "the-shumway-doctors.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
    `
  )

  return (
    <>
      <section id='home' className='divider'>
        <div className='container-fluid p-0'>
          <BackgroundImage
            Tag='div'
            className='hero'
            fluid={heroBG.childImageSharp.fluid}
            backgroundColor='#163963'
            loading='eager'
          // fadeIn={false}
          >
            <div className='hero__heading'>
              <h1>Chandler Dentist 85286</h1>
              <span style={{color: 'white', fontWeight: '600'}}>Exceptional dentistry ~ Beautiful smiles ~ Caring staff</span> <span className='text-theme-colored' />
            </div>
          </BackgroundImage>

        </div>
      </section>
    </>
  )
}

export default Hero
