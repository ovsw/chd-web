// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require('path')

const config = require('./config/website')

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    servicesNav: [
      {
        title: 'General',
        items: [
          {
            title: 'Children’s Dentistry',
            slug: '/childrens-dentistry/'
          },
          {
            title: 'Cleaning',
            slug: '/professional-dental-cleaning/'
          },
          {
            title: 'Crowns',
            slug: '/porcelain-crowns/'
          },
          {
            title: 'Fillings',
            slug: '/fillings/'
          },
          {
            title: 'Inlays and Onlays',
            slug: '/dental-inlays-and-onlays/'
          },
          {
            title: 'Sensitive Teeth',
            slug: '/sensitive-teeth/'
          },
          {
            title: 'Gingivitis and Gum Disease',
            slug: '/gingivitis-and-gum-disease/'
          },
          {
            title: 'Emergency Dentist in Chandler',
            slug: '/emergency-dentist-in-chandler/'
          }
        ]
      },
      {
        title: 'Cosmetic Dentistry',
        items: [
          {
            title: 'Invisalign',
            slug: '/invisalign/'
          },
          {
            title: 'Lumineers',
            slug: '/lumineers/'
          },
          {
            title: 'Teeth Whitening',
            slug: '/teeth-whitening-info/'
          }
        ]
      },
      {
        title: 'Dental Restorations',
        items: [
          {
            title: 'Bridges',
            slug: '/bridges/'
          },
          {
            title: 'Dental Implants',
            slug: '/dental-implants/'
          }
        ]
      },
      {
        title: 'Specialty',
        items: [
          {
            title: 'Dental Sedation',
            slug: '/dental-sedation/'
          },
          {
            title: 'Sleep Apnea / Snoring',
            slug: '/sleep-apnea-snorring/'
          },
          {
            title: 'TMJ / Jaw Pain',
            slug: '/tmj-jaw-pain/'
          },
          {
            title: 'Full & Partial Dentures',
            slug: '/dentures/'
          }
        ]
      }
    ],
    siteNav: [
      {
        title: 'Services',
        slug: '#',
        children: []
      },
      {
        title: 'About Us',
        slug: '#',
        children: [
          {
            title: 'Meet Dr. Andy',
            slug: '/andrew-shumway-chandler-dentist/'
          },
          {
            title: 'Meet Dr. Joel',
            slug: '/joel-shumway-chandler-dentist/'
          },
          {
            title: 'Meet Dr. Tyler',
            slug: '/meet-dr-tyler/'
          },
          {
            title: 'Our Team',
            slug: '/our-dental-team/'
          },
          {
            title: 'Our Office',
            slug: '/our-office/'
          },
          {
            title: 'Reviews',
            slug: '/testimonials-reviews/'
          },
          {
            title: 'ADA Compliance',
            slug: '/ada-compliance/'
          }
        ]
      },
      {
        title: 'Patient Info',
        slug: '#',
        children: [
          {
            title: 'Advanced Dental Technology',
            slug: '/advanced-dental-technology/'
          },
          {
            title: 'Financial Options',
            slug: '/financial-options/'
          },
          {
            title: 'Patient Protection and Comfort',
            slug: '/patient-protection-and-comfort/'
          },
          {
            title: 'Services Overview',
            slug: '/services-overview/'
          },
          {
            title: 'Medical History Form',
            slug: '/medical-history-form/'
          },
          {
            title: 'Smile Assessment Form',
            slug: '/smile-assessment-form/'
          }
        ]
      },
      {
        title: 'Directions',
        slug: '/location-map-and-directions/',
        children: []
      },
      {
        title: 'Blog',
        slug: '/blog/',
        children: []
      },
      {
        title: 'Apopointments',
        slug: '/schedule-an-appointment/',
        children: []
      },
      {
        title: 'Contact',
        slug: '/contact-us/',
        children: []
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    'gatsby-plugin-sitemap'
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //     // Defines where to place the tracking script - `true` in the head and `false` in the body
    //     head: true
    //     // sampleRate: 5,
    //     // siteSpeedSampleRate: 10
    //   }
    // }
  ]
}
