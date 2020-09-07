import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

export default [
  {
    title: 'TRULIO',
    technology: ['React', 'Styled Components', 'React Router',  'HTML', 'CSS', 'Node', 'Express', 'MongoDB', 'Webpack', 'AWS', 'Docker'],
    situation: 'Trulio is a website that markets real estate properties. The product page combines 4 microservices that provide property information to prosepctive buyers/agents.  I worked on a team of 3 other developers where I developed a micro-service that served a photo gallery component.',
    actions: [
      'Created photo gallery front end. UI included a modal image carousel, a form for requesting more information, and additional tabs for geo-spatial information.',
      'Created responsive user experience by implementing media queries and testing across browsers and devices.',
      'Implemented RESTful APIs and designed schema for MongoDB.',
      'Created proxy server that combined microservices and that served the product page.',
      'Deployed microservices and proxy server on AWS.',
      'Optimized product page performance for load time and accessibility using Lighthouse.'
    ],
    result: 'Deployed product page has first meaningful paint under 2s.',
    href: 'https://github.com/joshua-t-liu/image-gallery',
    Image: () => <img className='lazyload' style={{ height: '100%', width: '100%', objectFit: 'cover' }} data-src='https://www.coldwellbanker.com/images_brand/CB/72508062.jpg' />,
    Component: ({ isDesktop }) => {

      useEffect(() => {
      const loadScript = () => {
        const script = document.createElement('script');
        script.src = './bundle.js';
        document.body.append(script);
      }
      loadScript();

      // window.addEventListener('resize', () => {
      //   setIsDesktop(window.innerWidth > SMALL_WIDTH_NUM);
      //   setIsMobile(window.innerWidth <= SMALL_WIDTH_NUM);
      //   if (!document.getElementById('image-gallery').childElementCount) loadScript();
      // });
      }, []);

      return(
        <div id='image-gallery' style={{ width: '100%' }} />
      )
    },
  },
  {
    title: 'ADDIDOS',
    technology: ['Node', 'Express', 'Nginx', 'PostgreSQL', 'Redis', 'AWS', 'Loader.io', 'New Relic'],
    situation: 'Addidos is a website for marketing apparel. I worked on designing and scaling a micro-service that servers a customer reviews component. The goal was to scale the micro-service to handle 1000 RPS under load with an average load times under 50ms. The database included 50 million customer review records.  I inherited the frontend from a team member.',
    actions: [
      'Desgined schema for PostgreSQL database.',
      'Benchmarked database on local machine.',
      'Designed RESTful APIs for microservice.',
      'Deployed microservice on AWS.',
      'Tested performance and identified bottlenecks using Loader.io and New Relic.',
      'Implemented optimization strategies such as load balancing (Nginx) and caching (Redis).'
    ],
    result: 'Service handles 1200 RPS under load with an average load time of 50ms delay.',
    href: 'https://github.com/joshua-t-liu/reviews-module',
    Image: () => <img className='lazyload' style={{ height: '100%', width: '100%', objectFit: 'cover' }} data-src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rw-best-adidas-1590161486.jpg' />,
    Component: () => (
      <div style={{ textAlign: 'center' }}>
        <img className='lazyload' style={{  maxWidth: '750px', width: '100%', border: 'solid 1px rgb(196,196,196)', borderRadius: '0.5em' }} data-src='./customer_reviews.png' />
      </div>
    )
  },
  {
    title: 'PORTFOLIO',
    technology: ['React', 'React Router', 'Node', 'Express', 'AWS', 'Server Side Rendering', 'Webpack'],
    situation: 'I desgined and coded my portfolio website from scratch.',
    actions: [
      'Delivered a responsive experience by implementing media queries and testing cross-browsers and cross-devices.',
      'Implemented server side rendering using React.',
      'Implemented parallax and animation effects from scratch.',
      'Deployed website on AWS.',
    ],
    result: 'Responsive site with first contentful paint under 2 seconds.',
    href: 'https://github.com/joshua-t-liu/personal',
    Image: () => <img className='lazyload' style={{ height: '100%', width: '100%', objectFit: 'cover', display: 'block' }} data-src='./website-new.png' />,
    Component: () => {
      return (
        <div style={{ textAlign: 'center' }}>
          {<img className='lazyload' style={{ maxWidth: '750px', width: '100%', border: 'solid 1px rgb(196,196,196)', borderRadius: '0.5em' }} data-src='./website-new.png' />}
          {false && <img style={{ border: '1px solid rgb(196, 196, 196)', borderRadius: '2em', objectFit: 'cover', height: '80%', margin: 'auto' }} src='./website-new.png' />}
        </div>
      )
    }
  }
];
