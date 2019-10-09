'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Raas App',
          brief: '"Rebates as a service" app. This app finds eligible government rebates for a customer, and sends them as redeemable coupons.',
          description: 'This is an Angular app, that steps the user through the process of receiving an eligible rebate coupon. One of the first products I worked on at Uplight (Simple Energy), I provided functionality to auto-populate the forms with query params, and also set up vanity url routing, configurable per client.',
          type: 'angular',
          role: 'Front End Developer',
          date: 'November 2017',
          live_link: 'https://comed.simpleenergy.io/stores/nest/collections/smart-thermostats',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/Instant-rebates.png',
        }),
        knex('projects').insert({
          id: 2,
          name: 'Shopify Stores',
          brief: 'This application managed the builds, configuration, and deploys for over 20 Shopify stores serving millions of customers.',
          description: 'These Shopify stores were spun up for new utilities Simple Energy began contracting with. The configuration allowed utility style guides to be followed exactly, and all feature sets could be flagged. The major challenge with these stores were processing instant rebates, and calculating the resulting tax correctly.',
          type: 'ecommerce',
          role: 'Front End Developer',
          date: 'November 2017',
          live_link: 'https://xcelenergystore.com',
          thumbnail: 'https://storage.googleapis.com/alan_portfolio/Thumbs/shopify_thumb.jpg',
        }),
        knex('projects').insert({
          id: 3,
          name: 'Smud Services App',
          brief: 'Mini-app that integrates with "Home Advisor" to display contracting services available to a utility customer.',
          description: 'This is the first Angular app at Uplight (Simple Energy) that I was tasked with building from the ground up. The most interesting thing to me about this product is the CSS transforms on the cards, used to flip them when clicked.',
          type: 'web',
          role: 'angular',
          date: 'February 2018',
          live_link: 'https://projects.smudenergystore.com/projects/all',
          thumbnail: 'https://storage.googleapis.com/alan_portfolio/Thumbs/smud_service_thumb.jpeg',
        }),
        knex('projects').insert({
          id: 4,
          name: 'SVG Renderer',
          brief: 'A backend SVG renderer, built with Node and React. This rendered SVGs into XML which was then sent to printing companies.',
          description: 'A separate backend service would hit this Node app with API calls, passing data in an expected schema. The SVG renderer would then validate that data, input it into the templates, and return an SVG that could be used for printable paper reports, or attached in an email.',
          type: 'data-vis',
          role: 'Front End Developer',
          date: 'May 2018',
          live_link: '',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/svgrenderer4.svg',
        }),
        knex('projects').insert({
          id: 5,
          name: 'Insights Explore',
          brief: 'A configurable charting component that displays a utility customers energy data. The controllers can generate multiple graphs.',
          description: 'Initially built over two sprints, then iterated on constantly, this React component parses a large set of data into a meaningful interface. Built with pure SVGs, this is the most complex product I worked on at Uplight (Simple Energy).',
          type: 'data-vis',
          role: 'Front End Developer',
          date: 'March 2019',
          live_link: '',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/insights-explore.svg',
        }),
        knex('projects').insert({
          id: 6,
          name: 'Engage Components',
          brief: 'Easily embeddable standalone react components, bundled into an NPM package, and served with up with a node app.',
          description: 'This is a library of react components that integrate with Uplight (Simple Energy) backend services to encourage, engage, and educate utility customers on their energy usage.',
          type: 'react',
          role: 'Front End Developer',
          date: 'June 2018',
          live_link: '',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/engage-components.svg',
        }),
        knex('projects').insert({
          id: 7,
          name: 'CLI Portfolio',
          brief: 'Legacy portfolio site, built to look and function like a CLI. Showcases my portfoloio as of September 2017.',
          description: 'This is a fun project, trying to get a front end app to look and function like a CLI. I used SASS mixins to acheive the look, and listened to keyboard events to build the functionality. Sample commands: "hello", "clear", "projects", "resume", "linkedin". It also responds to the up and down keyboard commands to iterate through past CLI entries.',
          type: 'angular',
          role: 'Front End Developer',
          date: 'September 2017',
          live_link: 'http://alancarltaylor.com',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/legacyPortfolio1.svg',
        }),
        knex('projects').insert({
          id: 8,
          name: 'Vidiot',
          brief: 'Browse Reddit like a TV! Select a sort, sub, and enjoy scrolling the curated videos Reddit\'s API provides',
          description: 'This is ideal for people who want to passively watch whatever videos are most upvoted on Reddit, for a given subreddit and sort. A fun project that I built out of my love for Reddit.',
          type: 'angular',
          role: 'Front End Developer',
          date: 'July 2016',
          live_link: 'https://vidiot.herokuapp.com',
          thumbnail: 'https://storage.cloud.google.com/alan_portfolio/Thumbs/vidiot1.svg',
        }),
        knex('projects').insert({
          id: 9,
          name: 'Birth Death Rebirth',
          brief: 'Discover your past 5 lives with this handy reincarnation app! Built using Wikipedia\'s API, and a touch of mystery.',
          description: 'This is the very first javascript project that I ever built. It is integrated with the Wikipedia API, to pull the user\'s past five lives on this Earth. All that is required is a birthdate and some black magic, and the app is able to generate, not only the users past five lives, but also the misadventures ocurring in between them.',
          type: 'javascript',
          role: 'Front End Developer',
          date: 'March 2016',
          live_link: 'https://reincarnation.herokuapp.com ',
          thumbnail: 'https://portfolio-alan.s3-us-west-1.amazonaws.com/reincarnation.png',
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))");
    });
};
