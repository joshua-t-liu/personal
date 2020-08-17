export default [
  {
    title: 'Developing A Photo Gallery Microservice',
    technology: ['React', 'Styled Components', 'React Router',  'HTML', 'CSS', 'Node', 'Express', 'MongoDB', 'Webpack', 'AWS', 'Docker'],
    situation: 'Worked with a team of 3 other developers to create a product page for real estate properties that combined 4 microservices.',
    actions: [
      'Created photo gallery front end. UI included a modal image carousel, a form for requesting more information, and additional tabs for geo-spatial information.',
      'Created responsive user experience by implementing media queries and testing across browsers and devices.',
      'Implemented RESTful APIs and designed schema for MongoDB.',
      'Created proxy server that combined microservices and that served the product page.',
      'Deployed microservices and proxy server onto AWS.',
      'Optimized product page performance for load time and accessibility using Lighthouse.'
    ],
    result: 'Deployed product page has first meaningful paint under 2s.',
    href: 'https://github.com/joshua-t-liu/image-gallery',
    elementId: 'image-gallery',
  },
  {
    title: 'Designing and Scaling Microservice For  Customer Reviews',
    technology: ['Node', 'Express', 'Nginx', 'PostgreSQL', 'Redis', 'AWS', 'Loader.io', 'New Relic'],
    situation: 'Worked on designing and scaling a customer reviews microservice for an apparel web application. Goal was to scale microservice service to handle 1000 RPS under load with average load times under 50ms. Database included 50 million customer review records.',
    actions: [
      'Desgined schema for PostgreSQL database.',
      'Benchmarked database on local machine.',
      'Designed RESTful APIs for microservice.',
      'Deployed microservice onto AWS.',
      'Tested performance using Loader.io and New Relic.',
      'Implemented optimization strategies such as load balancing (Nginx) and caching (Redis).'
    ],
    result: 'Service handles 1200 RPS under load with an average load time of 50ms delay.',
    href: 'https://github.com/joshua-t-liu/reviews-module',
  },
  {
    title: 'Develop Personal Website',
    technology: ['React', 'React Router', 'Node', 'Express', 'AWS'],
    situation: 'Designed and developed personal website.',
    actions: [
      'Desgined website and coded from scratch',
      'Delivered a responsive experience by implementing media queries.',
      'Deployed website onto AWS.',
    ],
    // result: '',
    // href: 'https://github.com/joshua-t-liu/reviews-module',
  }
];
