export const websiteSchema = {
  '@context': 'http://www.schema.org',
  '@type': 'WebSite',
  'name': 'SHUMWAY DENTAL CARE',
  'alternateName': 'SHUMWAY DENTAL CARE',
  'url': 'https://www.mychandlerdentists.com/'
}

export const webpageSchema = {
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  'name': 'SHUMWAY DENTAL CARE',
  'description': 'When you need the best full-service, family dentist located in Tempe 85283, call Shumway Dental Care. We provie general dentistry, teeth cleaning, implants, veneers and Invisalign.',
  'publisher': {
    '@type': 'service',
    'name': 'SHUMWAY DENTAL CARE'
  },
  'license': 'https://www.mychandlerdentists.com/'
}

export const localBusinessSchema = {
  '@context': 'http://www.schema.org',
  '@type': 'localbusiness',
  'name': 'SHUMWAY DENTAL CARE',
  'telephone': '480-659-7800',
  'url': 'https://www.mychandlerdentists.com/',
  'logo': 'https://www.mychandlerdentists.com/site/templates/images/logo-wide.png',
  'image': 'https://www.mychandlerdentists.com/site/assets/files/1308/dental-implants-chandler-az-1.-hp_panel_size.png',
  'pricerange': '$$$',
  'description': ' We are a general family dentist office that takes great pride in how we treat our patients and the excellence in dentistry we strive to achieve.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '3150 S Gilbert Rd #1',
    'addressLocality': 'Chandler',
    'addressRegion': 'AZ',
    'postalCode': '85286',
    'addressCountry': 'USA'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'longitude': '-111.8414704',
    'latitude': '33.273102'
  },
  'contactPoint': {
    '@type': 'PostalAddress',
    'contactType': 'Customer Service',
    'telephone': '480-659-7800'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5',
    'bestRating': '5',
    'worstRating': '1',
    'ratingCount': '54'
  },
  'review': {
    '@type': 'Review',
    'author': {
      '@type': 'Person',
      'name': 'Evangalyn M'
    },
    'datePublished': '2019-04-15',
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': '5',
      'bestRating': '5',
      'worstRating': '1'
    },
    'reviewBody': 'Very nervous about dental treatment today was painless, quick, and so so easy for me. I was extremely comfortable in the office and around the great staff. 10/10 recommend.'
  }
}

export const professionalServiceSchema = {
  '@context': 'http://www.schema.org',
  '@type': 'professionalService',
  'name': ' Shumway Dental Care',
  'url': 'https://www.mychandlerdentists.com/',
  'logo': 'https://www.mychandlerdentists.com/site/templates/images/logo-wide.png',
  'image': 'https://www.mychandlerdentists.com/site/assets/files/1309/full-partial-dentures.-hp_panel_size.jpg',
  'alternateName': 'Shumway Dental Care',
  'priceRange': 'Affordable',
  'telephone': '+1 480-659-7800',
  'description': 'At Shumway Dental Care we are passionate in providing dental services that relieve pain, improve overall dental and medical health, enhance one’s self-esteem, and even save lives, in a state-of-the-art, family-friendly environment. We are committed to courteously treating our patients with respect, honesty and compassion, with only their best interests as our highest priority.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '3150 S Gilbert Rd #1',
    'addressLocality': 'Chandler',
    'addressRegion': 'AZ',
    'postalCode': '85286',
    'addressCountry': 'USA'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5',
    'bestRating': '5',
    'worstRating': '1',
    'reviewCount': '54'
  },
  'openingHoursSpecification': [
    {
      '@context': 'https://schema.org',
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Saturday',
      'opens': 'Closed'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Sunday',
      'opens': 'Closed'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Monday',
      'opens': '7:00 am - 3:00 pm'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Tuesday',
      'opens': '8:00 am - 5:00 pm'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Wednesday',
      'opens': '8:00 am - 5:00 pm'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Thursday',
      'opens': '7:00 am - 4:00 pm'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Friday',
      'opens': '7:00 am - 3:00 pm'
    }
  ],
  'sameAs': [
    'https://www.facebook.com/mychandlerdentists',
    'https://twitter.com/ShumwayDental',
    'https://www.youtube.com/user/ShumwayDentalCare/featured'
  ],
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '33.273102',
    'longitude': '-111.8414704'
  },
  'hasMap': 'https://www.google.com/maps/place/Shumway+Dental+Care/@33.2606181,-111.793337,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe0d105b5470650c!8m2!3d33.2606181!4d-111.7911483',
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+1 480-659-7800',
    'contactType': 'Customer Service'
  }
}

export const organization = {
  '@context': 'http://schema.org/',
  '@type': 'Organization',
  'name': 'Shumway Dental Care',
  'description': 'When you need the best full-service, family dentist located in Tempe 85283, call Shumway Dental Care. We provie general dentistry, teeth cleaning, implants, veneers and Invisalign.',
  'url': 'https://www.mychandlerdentists.com/',
  'logo': 'https://www.mychandlerdentists.com/site/templates/images/logo-wide.png',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5',
    'ratingCount': '5',
    'reviewCount': '54'
  },
  'review': {
    '@type': 'Review',
    'author': {
      '@type': 'Person',
      'name': 'Mark Siebels.'
    },
    'datePublished': '2019-04-04',
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': '5',
      'bestRating': '5',
      'worstRating': '1'
    },
    'reviewBody': 'From the minute you arrive to the very end of your appointment you are treated with the utmost professionalism. I have been a patient for over 12 years and I would never even consider going anywhere else. I always feel like family when I am there.'
  }
}

export const review = {
  '@context': 'http://schema.org',
  '@type': 'Review',
  'itemReviewed': {
    '@type': 'Organization',
    'name': 'Shumway Dental Care'
  },
  'reviewRating': {
    '@type': 'Rating',
    'ratingValue': '5',
    'bestRating': '5',
    'worstRating': '1'
  },
  'name': 'Evangalyn M',
  'author': {
    '@type': 'Person',
    'name': 'Evangalyn M'
  },
  'reviewBody': 'Very nervous about dental treatment ?? today was painless, quick, and so so easy for me. I was extremely comfortable in the office and around the great staff. 10/10 recommend. ',
  'datePublished': '2019-04-26',
  'publisher': {
    '@type': 'Organization',
    'name': 'Shumway Dental Care'
  }
}

export const breadcrubmList = {
  '@context': 'http://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@id': 'https://www.mychandlerdentists.com/',
        'name': 'Home'
      }
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@id': 'https://www.mychandlerdentists.com/contact-us/',
        'name': 'Contact Us'
      }
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@id': 'https://www.mychandlerdentists.com/about-us/testimonials-reviews/',
        'name': 'Reviews'
      }
    }
  ]
}

export const video = {
  '@context': 'http://schema.org',
  '@type': 'VideoObject',
  'name': 'Shumway Dental Care Chandler | Chandler Dentist | Cosmetic Dentist Chandler | Chandler Dental Care',
  'description': "Shumway Dental Clinic is located in Chandler Arizona. Drs. Andrew and Joel Shumway offer the best family dental care in a comfortable environment. These Chandler dentists cater to cowards and can help alleviate fears!When you're looking for family dental care, you want to find the best dentist. Our Chandler office is up-to-date on the most recent dental treatments and technology. Along with preventative dental care like teeth cleaning, Dr. Shumway has a great deal of experience using the latest techniques in cosmetic dentistry. He can help you obtain the smile of your dreams in a very short time. Want whiter teeth? Shumway dental offers custom teeth whitening trays as well as the new Zoom2 whitening system. Be sure to check out the coupons on the site. They include new patient discounts as well as savings for existing patients.",
  'thumbnailUrl': 'https://www.youtube.com/watch?v=5rPNhDs1s1I',
  'uploadDate': '2012-03-14T00:00:00+01:00',
  'duration': 'PT1M20S',
  'publisher': {
    '@type': 'Organization',
    'name': 'Shumway Dental Care',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://www.mychandlerdentists.com/site/templates/images/logo-wide.png',
      'width': 600,
      'height': 60
    }
  },
  'contentUrl': 'https://www.youtube.com/watch?v=5rPNhDs1s1I',
  'embedUrl': 'https://www.mychandlerdentists.com/',
  'interactionCount': '1'
}
